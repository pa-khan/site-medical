<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['city'])) {$city = $_POST['city'];}
if (isset($_POST['vazhno'])) {$vazhno = $_POST['vazhno'];}

$message;

if ($name== true) {
	$message .= "Имя: $name";
}
if ($phone== true) {
	$message .= "\nТелефон: $phone";
}
if ($email== true) {
	$message .= "\nПочта: $email";
}
if ($city == true) {
	$message .= "\nГород: $city";
}

if ($vazhno == 1) {
	$message .= "\nВажно: Цена";
}
else if ($vazhno == 2) {
	$message .= "\nВажно: Сроки поставки";
}
else if ($vazhno == 3) {
	$message .= "\nВажно: Опыт специалистов";
}
else if ($vazhno == 4) {
	$message .= "\nВажно: Гарантии";
}
else if ($vazhno == 5) {
	$message .= "\nВажно: Широкий ассортимент";
}
else if ($vazhno == 6) {
	$message .= "\nВажно: Возможность самостоятельно забрать со склада";
}


$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новый заказ с сайта";

$to = "io@e5ash.com";
$send = mail($to, $subject, $message, $headers);

$to = "e5ash.bro@gmail.com";
$send = mail($to, $subject, $message, $headers);
?>