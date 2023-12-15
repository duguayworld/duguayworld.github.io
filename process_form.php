<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $subject = $_POST["Subject"];
    $message = $_POST["Message"];

    // Create a string with the form data
    $formData = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message\n\n";

    // Define the path to the text file
    $filePath = "form_data.txt";

    // Append the form data to the text file
    file_put_contents($filePath, $formData, FILE_APPEND | LOCK_EX);

    // Redirect to a thank you page or back to the form page
    header("Location: index.html");
    exit();
} else {
    // Handle invalid requests
    header("HTTP/1.1 400 Bad Request");
    echo "Invalid request method.";
    exit();
}
?>

