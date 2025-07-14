<?php
$targetDir = "uploads/";
$targetFile = $targetDir . basename($_FILES["file"]["name"]);

if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
    echo "Файл ". htmlspecialchars(basename($_FILES["file"]["name"])) . " успешно загружен.";
} else {
    echo "Ошибка загрузки файла.";
}
?>
