<?php
require_once 'vendor/autoload.php';

use PhpOffice\PhpWord\IOFactory;

// Full path to your Word document, including the file name
$filePath = 'C:\Users\lap002\Downloads\your_document.docx';

try {
    // Load the document
    $phpWord = IOFactory::load($filePath);

    // Get all sections
    $sections = $phpWord->getSections();

    // Iterate through sections
    foreach ($sections as $section) {
        // Iterate through elements in the section
        foreach ($section->getElements() as $element) {
            if (method_exists($element, 'getText')) {
                echo $element->getText() . "\n";
            }
        }
    }
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>