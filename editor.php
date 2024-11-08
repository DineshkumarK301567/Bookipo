<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Input Form</title>
</head>
<body>
    <h1>Documet Input Form</h1>
    <form actionn="save_document.php" method="POST">
        <label for="introduction">Introduction:</label><br>
        <textarea id="introduction" name="introduction" rows="4" cols="50" required></textarea><br><br>
        
        <label for="project_scope">Project Scope:</label><br>
        <textarea id="project_scope" name="project_scope" rows="4" cols="50" required></textarea><br><br>
        
        <label for="target_scope">Target Scope:</label><br>
        <textarea id="target_scope" name="target_scope" rows="4" cols="50" required></textarea><br><br>
        
        <label for="summary_evaluation">Summary of Evaluation:</label><br>
        <textarea id="summary_evaluation" name="summary_evaluation" rows="4" cols="50" required></textarea><br><br>
        
        <label for="penetration_findings">Web Application Penetration Testing Findings:</label><br>
        <textarea id="penetration_findings" name="penetration_findings" rows="4" cols="50" required></textarea><br><br>
        
        <label for="document_history">Document History:</label><br>
        <textarea id="document_history" name="document_history" rows="4" cols="50" required></textarea><br><br>
        
        <input type="submit" value="Submit">
    </form>
</body>
</html>