<?php
$to      = 'wotkad@gmail.com';
$subject = 'Заявка с сайта Skolkovo (Форма)';
$message = 'Заявка.  Имя: ' . $_POST["name"] . ', Телефон: ' . $_POST["phone"] . ', Почта: ' . $_POST["email"] . ', О компании: ' . $_POST["textarea"];
$headers = 'From: wotkad@gmail.com' . "\r\n" .
    'Content-Type: text/plain; charset=utf8;' . "\r\n" .
    'Reply-To: wotkad@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>

