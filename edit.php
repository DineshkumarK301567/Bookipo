<?php
// Database connection
$host = 'localhost';
$db = 'automation';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Initialize edit_data to avoid undefined variable warnings
$edit_data = null;
$edit_id = 1; // Default ID if not provided

// Check if edit_id is provided in GET request
if (isset($_GET['edit_id'])) {
    $edit_id = intval($_GET['edit_id']); // Ensure it's an integer for safety
}

// Fetch data for the specified ID
$result = $conn->query("SELECT * FROM submissions WHERE id = $edit_id");
if ($result && $result->num_rows > 0) {
    $edit_data = $result->fetch_assoc();
}

// Update logic if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize inputs
    $introduction = htmlspecialchars($_POST['introduction']);
    $project_scope = htmlspecialchars($_POST['project_scope']);
    $target_scope = htmlspecialchars($_POST['target_scope']);
    $summary_evaluation = htmlspecialchars($_POST['summary_evaluation']);
    $penetration_findings = htmlspecialchars($_POST['penetration_findings']);
    $document_history = htmlspecialchars($_POST['document_history']);
    $severity = htmlspecialchars($_POST['severity']);
    $threat_Description = htmlspecialchars($_POST['threat_Description']);
    $methodology= htmlspecialchars($_POST['methodology']);
    $impact= htmlspecialchars($_POST['impact']);
    $affected_Hosts=  htmlspecialchars($_POST['affected_Hosts']);
    $recommendation = htmlspecialchars($_POST['recommendation']);
    $reference = htmlspecialchars($_POST['reference']);
    // Handle image upload
    $image_base64 = '';
    $image_path = ''; // Default empty path
    if (isset($_FILES['image_upload']) && $_FILES['image_upload']['error'] == UPLOAD_ERR_OK) {
        $upload_dir = 'uploads/'; // Ensure this directory exists and is writable
        if (!is_dir($upload_dir)) {
            mkdir($upload_dir, 0777, true); // Create directory if it doesn't exist
        }

        $image_name = basename($_FILES['image_upload']['name']);
        $image_path = $upload_dir . $image_name;

        // Move the uploaded file
        if (move_uploaded_file($_FILES['image_upload']['tmp_name'], $image_path)) {
            $image_base64 = base64_encode(file_get_contents($image_path));
        }
    }

    // Update data in the database
    $stmt = $conn->prepare("UPDATE submissions SET introduction=?, project_scope=?, target_scope=?, summary_evaluation=?, penetration_findings=?, document_history=?, severity=?, threat_Description=?, methodology=?, impact=?, affected_Hosts=?, image_url=?, recommendation=?, reference=? WHERE id=?");
    $stmt->bind_param("ssssssssssssssi", $introduction, $project_scope, $target_scope, $summary_evaluation, $penetration_findings, $document_history, $severity, $threat_Description, $methodology, $impact, $affected_Hosts, $image_path, $recommendation,$reference, $edit_id);

    $severity_colors = [
        'Critical' => 'DarkRed',
        'High' => 'red',
        'Medium' => 'Orange',
        'Low' => 'Yellow',
        'Info' => 'Blue'
    ];
    
    // Set color for the selected severity
    $severity_color = isset($severity_colors[$severity]) ? $severity_colors[$severity] : 'black';

    if ($stmt->execute()) {
        // Prepare the Word document content with embedded base64 image
        $content = "<!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <title>Document Submission</title>
        <style>
            body, h1 { font-family: 'Poppins', sans-serif; font-size: 29px; }
            body, p { font-size: 13px; color: #333; }
            h3 { color: Blue; margin: 5px 0; }
            p { margin: 3px 0; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 3px solid #0a0a0a; padding: 8px; text-align: center; }
            th { background-color:#1e0acc; color: white; }
        </style>
    </head>
    <body>
        <h1 style='text-align: center; color: #FF4D01;'>Auriseg</h1><br>
        <h3>Introduction:</h3><p>$introduction</p><br>
        <h3>Project Scope:</h3><p>$project_scope</p><br>
        <h3>Target Scope:</h3><p>$target_scope</p><br>
        <h3>Summary of Evaluation:</h3><p>$summary_evaluation</p><br>
        <h3>Penetration Findings:</h3><p>$penetration_findings</p><br>
        <h3>Document History:</h3><p>$document_history</p><br>
        <h1 style='color: Blue;'>5. Web Application Penetration Testing Findings</h1><br>
        <h3>5.1 Insecure Transport Protocols</h3>
        <h3 style='color: Blue; display: inline;'>Threat Description: <span style='color:$severity_color;'>$severity</span></h3>
        <p>$threat_Description</p><br>
        <h3>Methodology:</h3><p>$methodology</p><br>
        <h3>Impact:</h3><p>$impact</p><br>
        <h3>Affected Hosts:</h3>
        <table>
            <tr><th>HOST</th><th>PROOF</th></tr><tr><td>";

        // Split the affected_Hosts content by new lines and add <br> tags
        $hosts_lines = explode("\n", $affected_Hosts);
        foreach ($hosts_lines as $host) {
            $content .= htmlspecialchars($host) . "<br>";
        }

        $content .= "</td><td style='background-color:#4CAF50;'>Available</td></tr></table><br>";

        // Embed the base64 image if it exists
        if ($image_base64) {
            $content .= "<h2 style='color: Blue;'>Uploaded Image:</h2><br><img src='data:image/jpeg;base64,$image_base64' style='max-width: 100%;'><br>";
        }
        $content .= "<h3>Recommendation:</h3><p>$recommendation</p><br>";
        $content .= "<h3 style='color: Black;'>Reference:</h3><p style='color: Blue;'>$reference</p><br>";
        $content .= "</body></html>";

        // Set headers for the Word document download
        header("Content-Type: application/vnd.ms-word");
        header("Content-Disposition: attachment; filename=\"document.doc\"");

        // Output the content for download
        echo $content;
        exit;
    } else {
        echo "Error: " . $stmt->error;
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
    <title>Auriseg</title>
    <style>
        /* Same CSS styles as before */
        
        
        /* Global reset */
    /* Global reset */
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Body styling */
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(to right, #e0f7fa, #e0f2f1); /* Gradient background */
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        /* Container styling */
        .container {
            max-width: 700px;
            width: 90%;
            background: #ffffff; /* White background */
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            animation: fadeIn 0.5s ease; /* Fade-in animation */
            transition: transform 0.3s ease; /* Smooth scaling */
        }

        .container:hover {
            transform: scale(1.02); /* Slightly enlarge on hover */
        }

        /* Heading styling */
        h1 {
            text-align: center;
            font-size: 28px;
            margin-bottom: 20px;
            color: #ff5500; /* Teal color */
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        }

        /* Label styling */
        label {
            display: block;
            font-size: 14px;
            font-weight: 600;
            margin-top: 20px;
            color: #333;
        }

        /* Input fields styling */
        textarea, input[type="file"] {
            width: 100%;
            padding: 12px;
            margin-top: 8px;
            font-size: 14px;
            border: 2px solid #80deea; /* Teal border */
            border-radius: 8px;
            transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for focus */
        }

        textarea:focus, input[type="file"]:focus {
            border-color: #ff5500; /* Darker teal on focus */
            outline: none;
            box-shadow: 0 0 8px rgba(0, 121, 107, 0.5); /* Teal shadow effect */
        }

        /* Submit button styling */
        input[type="submit"] {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            font-weight: bold;
            color: #ffffff;
            background-color:#ff5500; /* Teal background */
            border: none;
            border-radius: 8px;
            margin-top: 20px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transition for background color and scale */
        }

        input[type="submit"]:hover {
            background-color: #00796b; /* Darker teal on hover */
            transform: translateY(-2px); /* Slight lift on hover */
        }

        input[type="submit"]:active {
            transform: translateY(0); /* Return to normal on click */
        }

        /* Responsive styling */
        @media (max-width: 600px) {
            .container {
                padding: 20px;
            }
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
        /* Same CSS styles as before */
    </style>
</head>
<body>
    <div class="container">
        <h1>Auriseg Document</h1>
        <?php if ($edit_data): ?>
            <form action="edit.php?edit_id=<?php echo $edit_id; ?>" method="POST" enctype="multipart/form-data">
                <label for="introduction">Introduction:</label>
                <textarea id="introduction" name="introduction" rows="4" required><?php echo htmlspecialchars($edit_data['introduction']); ?></textarea>
                
                <label for="project_scope">Project Scope:</label>
                <textarea id="project_scope" name="project_scope" rows="4" required><?php echo htmlspecialchars($edit_data['project_scope']); ?></textarea>
                
                <label for="target_scope">Target Scope:</label>
                <textarea id="target_scope" name="target_scope" rows="4" required><?php echo htmlspecialchars($edit_data['target_scope']); ?></textarea>
                
                <label for="summary_evaluation">Summary of Evaluation:</label>
                <textarea id="summary_evaluation" name="summary_evaluation" rows="4" required><?php echo htmlspecialchars($edit_data['summary_evaluation']); ?></textarea>
                
                <label for="penetration_findings">Penetration Findings:</label>
                <textarea id="penetration_findings" name="penetration_findings" rows="4" required><?php echo htmlspecialchars($edit_data['penetration_findings']); ?></textarea>
                
                <label for="document_history">Document History:</label>
                <textarea id="document_history" name="document_history" rows="4" required><?php echo htmlspecialchars($edit_data['document_history']); ?></textarea>

                <label for="severity">Severity:</label>
                <select id="severity" name="severity" required>
                    <option value="Critical"<?= ($edit_data['severity'] === 'Critical') ? 'selected' : ''; ?>>Critical</option>
                    <option value="High"<?= ($edit_data['severity'] === 'High') ? 'selected' : ''; ?>>High</option>
                    <option value="Medium"<?= ($edit_data['severity'] === 'Medium') ? 'selected' : ''; ?>>Medium</option>
                    <option value="Low"<?= ($edit_data['severity'] === 'Low') ? 'selected' : ''; ?>>Low</option>
                    <option value="Info"<?= ($edit_data['severity'] === 'Info') ? 'selected' : ''; ?>>Info</option>
                </select>

                <label for="threat_Description">Threat Description:</label>
                <textarea id="threat_Description" name="threat_Description" rows="4" required><?php echo htmlspecialchars($edit_data['threat_Description']); ?></textarea>
                
                <label for="methodology">Methodology:</label>
                <textarea id="methodology" name="methodology" rows="4" required><?php echo htmlspecialchars($edit_data['methodology']); ?></textarea>

                <label for="impact">Impact:</label>
                <textarea id="impact" name="impact" rows="4" required><?php echo htmlspecialchars($edit_data['impact']); ?></textarea>

                <label for="affected_Hosts">Affected Hosts:</label>
                <textarea id="affected_Hosts" name="affected_Hosts" rows="4" required><?php echo htmlspecialchars($edit_data['affected_Hosts']); ?></textarea>

                <label for="image_upload">Upload Image (optional):</label>
                <input type="file" id="image_upload" name="image_upload" accept="image/*">

                <label for="recommendation">Recommendation:</label>
                <textarea id="recommendation" name="recommendation" rows="4" required><?php echo htmlspecialchars($edit_data['recommendation']); ?></textarea>


                <label for="reference">Reference:</label>
                <textarea id="reference" name="reference" rows="4" required><?php echo htmlspecialchars($edit_data['reference']); ?></textarea>

                <input type="submit"  value="Update Document">
            </form>
        <?php else: ?>
            <p>No data found for the specified ID.</p>
        <?php endif; ?>
    </div>
</body>
</html>