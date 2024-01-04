<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $formData = file_get_contents("php://input");
    file_put_contents("form_data.txt", $formData, FILE_APPEND | LOCK_EX);
    echo "Form data successfully submitted.";
} else {
    header("HTTP/1.1 400 Bad Request");
    echo "Invalid request method.";
    exit();
}
?>
