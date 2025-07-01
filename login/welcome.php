<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: index.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Добро пожаловать</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="form-container">
            <h2>Добро пожаловать, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h2>
            <p>Вы успешно вошли в систему.</p>
            <p>Ваш email: <?php echo htmlspecialchars($_SESSION['email']); ?></p>
            
            <form action="logout.php" method="post">
                <button type="submit" class="submit-btn">Выйти</button>
            </form>
        </div>
    </div>
</body>
</html>