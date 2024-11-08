<?php
$servername = "localhost";
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "welcome"; // Database Name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$message = ''; // Variable to store the message

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $mobile_number = $_POST['mobile_number'];
    $email = $_POST['email'];  // Get email from the form
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // Prepare the statement with placeholders
    $stmt = $conn->prepare("INSERT INTO projects (username, mobile_number, email, password) VALUES (?, ?, ?, ?)");

    // Bind the parameters
    $stmt->bind_param("ssss", $username, $mobile_number, $email, $password);

    // Execute the statement
    if ($stmt->execute()) {
        $message = "Registration successful!";
    } else {
        $message = "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - Auiseg</title>
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
        input[type="text"], input[type="password"], input[type="email"] {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc; /* Light gray border */
            border-radius: 5px;
            transition: border-color 0.3s;
        }

        input[type="text"]:focus, input[type="password"]:focus, input[type="email"]:focus {
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
        <h1>Auiseg Registration</h1>
        <form method="post" action="">
            <label for="username">Username:</label>
            <input type="text" name="username" required>
            
            <label for="mobile_number">Mobile Number:</label>
            <input type="text" name="mobile_number" required>

            <label for="email">Email:</label>
            <input type="email" name="email" required>  <!-- Added Email Field -->
            
            <label for="password">Password:</label>
            <input type="password" name="password" required>
            
            <input type="submit" value="Register">
        </form><br>
        
        <p>Already have an account? <a href="login.php">Login here</a></p> <!-- Link to Login Page -->
    </div>

    <!-- Popup Overlay -->
    <div class="overlay" id="overlay"></div>

    <!-- Popup Message -->
    <div class="popup" id="popup">
        <p id="popupMessage"></p>
        <button onclick="closePopup()">Close</button>
    </div>

    <script>
        // Function to open the popup
        function showPopup(message) {
            document.getElementById('popupMessage').innerText = message;
            document.getElementById('popup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }

        // Function to close the popup
        function closePopup() {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }

        // Show the popup message if there is one
        <?php if (!empty($message)) : ?>
            showPopup("<?php echo $message; ?>");
        <?php endif; ?>
    </script>
</body>
</html>