<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auriseg</title>
    <style>
        /* Basic reset and styling */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f4f4f9;
        }
        .form-container {
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            max-width: 400px;
            width: 100%;
        }
        h2 {
            text-align: center;
            color: #333;
        }
        label {
            display: block;
            margin-top: 1rem;
            color: #555;
        }
        input[type="text"],
        input[type="email"],
        textarea {
            width: 100%;
            padding: 0.75rem;
            margin-top: 0.5rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        textarea:focus {
            border-color: #007bff;
        }
        button[type="submit"] {
            width: 100%;
            padding: 0.75rem;
            margin-top: 1.5rem;
            background-color: #007bff;
            color: #fff;
            font-size: 1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        button[type="submit"]:hover {
            background-color: #0056b3;
        }
        .success-message, .error-message {
            text-align: center;
            font-weight: bold;
            margin-top: 1rem;
        }
        .success-message {
            color: green;
        }
        .error-message {
            color: red;
        }
    </style>
</head>
<body>

<div class="form-container">
    <h2>Contact Us</h2>

    <?php
    require 'C:\xampp\htdocs\Phpmailer/PHPMailerAutoload.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);
        date_default_timezone_set('Asia/Kolkata'); // Set to your desired timezone
        $timestamp = date("d-m-Y H:i:s");

        $mail = new PHPMailer(true);
        
        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'dineshkumar@auriseg.com';
            $mail->Password = 'inxk rhpw asxr esrd';
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;

            $mail->setFrom('dineshkumar@auriseg.com');
            $mail->addAddress($email);
            $mail->addReplyTo('dineshkumar@auriseg.com');

            $mail->isHTML(TRUE);
            $mail->Subject = 'Auriseg Project Details';
            $mail->Body    = "You have received a new message from the form Auriseg.<br><br>" .
                             "<b>Name:</b> $name<br>" .
                             "<b>Email:</b> $email<br>" .
                             "<b>Message:</b> $message<br>" .
                             "<b>Submitted At:</b> $timestamp<br>";

            $mail->send();
            echo "<p class='success-message'>Form submitted successfully.</p>";
        } catch (Exception $e) {
            echo "<p class='error-message'>There was an error sending the email: {$mail->ErrorInfo}</p>";
        }
    }
    ?>

    <!-- HTML Form -->
    <form action="form.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Submit</button>
    </form>
</div>

</body>
</html>