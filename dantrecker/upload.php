<?php
$uploadDir = "uploads/";
$maxSize = 10 * 1024 * 1024; // 10 MB

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!isset($_FILES["file"]) || $_FILES["file"]["error"] !== UPLOAD_ERR_OK) {
        die("Ошибка при загрузке файла.");
    }

    if ($_FILES["file"]["size"] > $maxSize) {
        die("Файл слишком большой. Максимум 10 МБ.");
    }

    $fileName = basename($_FILES["file"]["name"]);
    $targetPath = $uploadDir . $fileName;

    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetPath)) {
        echo "Файл успешно загружен: <a href='$targetPath'>$fileName</a>";
    } else {
        echo "Ошибка при сохранении файла.";
    }
} else {
    echo "Неверный запрос.";
}
?>
