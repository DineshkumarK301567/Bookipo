<?php
require 'vendor/autoload.php'; // Include the PHPWord library

use PhpOffice\PhpWord\PhpWord;
use PhpOffice\PhpWord\IOFactory;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Database connection
    $host = 'localhost';
    $db = 'automation';
    $user = 'root';
    $pass = '';

    $conn = new mysqli($host, $user, $pass, $db);
    
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get the form data
    $introduction = htmlspecialchars($_POST['introduction']);
    $project_scope = htmlspecialchars($_POST['project_scope']);
    $target_scope = htmlspecialchars($_POST['target_scope']);
    $summary_evaluation = htmlspecialchars($_POST['summary_evaluation']);
    $penetration_findings = htmlspecialchars($_POST['penetration_findings']);
    $document_history = htmlspecialchars($_POST['document_history']);
    
    // Handle image upload
    $image_upload = $_FILES['image_upload'];
    $image_path = '';

    if ($image_upload['error'] == UPLOAD_ERR_OK) {
        $upload_dir = 'uploads/'; // Ensure this directory exists and is writable
        $image_name = basename($image_upload['name']);
        $image_path = $upload_dir . $image_name;

        if (!move_uploaded_file($image_upload['tmp_name'], $image_path)) {
            die("Error uploading image.");
        }
    }

    // Get the full URL for the uploaded image
    $image_url = 'http://' . $_SERVER['HTTP_HOST'] . '/' . $image_path;

    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO submissions (introduction, project_scope, target_scope, summary_evaluation, penetration_findings, document_history, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $introduction, $project_scope, $target_scope, $summary_evaluation, $penetration_findings, $document_history, $image_url);

    // Execute the statement
    if ($stmt->execute()) {
        // Create a new PHPWord object
        $phpWord = new PhpWord();

        // Set document properties
        $phpWord->getDocInfo()->setTitle('Auriseg Document');

        // Add a section
        $section = $phpWord->addSection();

        // Add title with center alignment
        $titleStyle = ['bold' => true, 'size' => 16];
        $section->addText('Document Details', $titleStyle, ['align' => 'center']);

        // Add content with styles
        $section->addText('Introduction:', ['bold' => true]);
        $section->addText($introduction, ['size' => 12]);
        
        $section->addText('Project Scope:', ['bold' => true]);
        $section->addText($project_scope, ['size' => 12]);

        $section->addText('Target Scope:', ['bold' => true]);
        $section->addText($target_scope, ['size' => 12]);

        $section->addText('Summary of Evaluation:', ['bold' => true]);
        $section->addText($summary_evaluation, ['size' => 12]);

        $section->addText('Penetration Findings:', ['bold' => true]);
        $section->addText($penetration_findings, ['size' => 12]);

        $section->addText('Document History:', ['bold' => true]);
        $section->addText($document_history, ['size' => 12]);

        // Add image if it exists
        if ($image_path) {
            $section->addImage($image_url, ['width' => 600, 'height' => 400]);
        }

        // Save the document
        $filename = 'document.docx';
        $objWriter = IOFactory::createWriter($phpWord, 'Word2007');

        // Set headers for the Word document download
        header('Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        header("Content-Disposition: attachment; filename=\"$filename\"");
        
        // Save the document to output
        $objWriter->save("php://output");
        exit;
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
} else {
    // Redirect to form if accessed directly
    header("Location: index.php");
    exit;
}
?>