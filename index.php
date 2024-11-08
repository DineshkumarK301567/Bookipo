<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auriseg Document Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #f4f4f4;
        }
        .container {
            display: flex;
            flex-direction: column;
            height: 100vh;
        }
        header {
            background: #007BFF;
            color: white;
            padding: 15px;
            text-align: center;
        }
        .main {
            display: flex;
            flex: 1;
        }
        .sidebar {
            width: 200px;
            background: #343a40;
            color: white;
            padding: 15px;
        }
        .sidebar ul {
            list-style: none;
            padding: 0;
        }
        .sidebar ul li {
            margin: 10px 0;
        }
        .sidebar ul li a {
            color: white;
            text-decoration: none;
        }
        .sidebar ul li a:hover {
            text-decoration: underline;
        }
        .content {
            flex: 1;
            padding: 20px;
            background: white;
            border-left: 1px solid #ccc;
        }
        h2 {
            color: #333;
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin: 10px 0 5px;
            font-weight: bold;
        }
        textarea, input[type="file"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            resize: vertical;
        }
        input[type="submit"] {
            background-color: #007BFF;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
            margin-top: 20px;
        }
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Auriseg Document Form</h1>
        </header>
        <div class="main">
            <nav class="sidebar">
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </nav>
            <div class="content">
                <h2>Document Input Form</h2>
                <form action="word.php" method="POST" enctype="multipart/form-data">
                    <label for="introduction">Introduction:</label>
                    <textarea id="introduction" name="introduction" rows="4" required></textarea>
                    
                    <label for="project_scope">Project Scope:</label>
                    <textarea id="project_scope" name="project_scope" rows="4" required></textarea>
                    
                    <label for="target_scope">Target Scope:</label>
                    <textarea id="target_scope" name="target_scope" rows="4" required></textarea>
                    
                    <label for="summary_evaluation">Summary of Evaluation:</label>
                    <textarea id="summary_evaluation" name="summary_evaluation" rows="4" required></textarea>
                    
                    <label for="penetration_findings">Penetration Testing Findings:</label>
                    <textarea id="penetration_findings" name="penetration_findings" rows="4" required></textarea>
                    
                    <label for="document_history">Document History:</label>
                    <textarea id="document_history" name="document_history" rows="4" required></textarea>

                    <label for="image_upload">Upload Image:</label>
                    <input type="file" id="image_upload" name="image_upload" required>
                    
                    <input type="submit" value="Submit">
                </form>
            </div>
        </div>
    </div>
</body>
</html>