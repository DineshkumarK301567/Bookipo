<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "welcome";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$message = '';

// Handle OTP sending
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['send_otp'])) {
    $email = $_POST['email'];

    // Check if the email exists in the database
    $stmt = $conn->prepare("SELECT email FROM projects WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Generate a 4-digit OTP
        $otp = rand(1000, 9999);
        $_SESSION['otp'] = $otp;
        $_SESSION['otp_expiry'] = time() + 300; // OTP expires in 5 minutes
        $_SESSION['email'] = $email;

        // Send OTP to email using PHPMailer
        require 'C:\xampp\htdocs\Phpmailer/PHPMailerAutoload.php';
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'dineshkumar@auriseg.com';
        $mail->Password = 'inxk rhpw asxr esrd';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('dineshkumar@auriseg.com', 'Auiseg');
        $mail->addAddress($email);
        $mail->isHTML(true);
        $mail->Subject = 'Your Auiseg Login OTP';
        $mail->Body = "Your OTP is: <b>$otp</b>. It will expire in 5 minutes.";

        if (!$mail->send()) {
            $message = 'Could not send OTP. Mailer Error: ' . $mail->ErrorInfo;
        } else {
            $message = 'OTP has been sent to your email.';
        }
    } else {
        $message = "No user found with that email address.";
    }

    $stmt->close();
}

// Handle OTP verification
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['verify_otp'])) {
    $entered_otp = $_POST['otp'];

    // Verify OTP
    if ($entered_otp == $_SESSION['otp'] && time() <= $_SESSION['otp_expiry']) {
        unset($_SESSION['otp']);
        unset($_SESSION['otp_expiry']);
        header("Location:edit.php");
        exit();
    } else {
        $message = "Invalid OTP or OTP expired.";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Auiseg</title>
    <style>
        /* Global reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Body styling */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f4f8; /* Light gray background */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            animation: fadeIn 1s ease; /* Fade-in animation for body */
        }

        /* Container styling */
        .container {
            max-width: 400px;
            width: 90%;
            background: #ffffff; /* White background */
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            animation: slideIn 0.5s ease; /* Slide-in animation for container */
        }

        /* Heading styling */
        h1 {
            text-align: center;
            margin-bottom: 20px;
            color: #007bff; /* Blue color */
        }

        /* Label styling */
        label {
            display: block;
            margin-top: 10px;
            color: #555;
        }

        /* Input fields styling */
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc; /* Light gray border */
            border-radius: 5px;
            font-size: 16px; 
            transition: border-color 0.3s;
        }

        input[type="text"]:focus, input[type="password"]:focus {
            border-color: #007bff; /* Change border color on focus */
            outline: none;
        }

        input[type="email"], input[type="email"] {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc; /* Light gray border */
            border-radius: 5px;
            font-size: 16px; 
            transition: border-color 0.3s;
        }

        input[type="email"]:focus, input[type="email"]:focus {
            border-color: #007bff; /* Change border color on focus */
            outline: none;
        }

        /* Submit button styling */
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #007bff; /* Blue background */
            color: #ffffff; /* White text */
            border: none;
            border-radius: 5px;
            margin-top: 15px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
            font-size: 16px;
        }

        input[type="submit"]:hover {
            background-color: #0056b3; /* Darker blue on hover */
            transform: scale(1.05); /* Slight zoom effect */
        }

        /* Popup message styling */
        .popup {
            display: none;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            z-index: 1000;
        }

        /* Overlay for the popup */
        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }

        /* Keyframes for animations */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Login</h1>
   
            <form method="post" action="">
                <label for="email">Email:</label>
                <input type="email" name="email" required>
                <input type="submit" name="send_otp" value="Send OTP">
            </form>
  
            <form method="post" action="">
                <label for="otp">Enter OTP:</label>
                <input type="text" name="otp" maxlength="4" required>
                <input type="submit" name="verify_otp" value="Verify OTP">
            </form>

        <?php if (!empty($message)) echo "<p>$message</p>"; ?>
    </div>
</body>
</html>