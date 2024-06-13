<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Здесь можно добавить код для отправки email или сохранения данных в базу

    echo "Спасибо, $name! Мы свяжемся с вами по адресу $email.";
}
?>
