<?php 

// Получаем адрес сервера
$user = 'root'; // пользователь
$password = 'root'; // пароль
$bd = 'drop_bd'; // название бд
$host = 'localhost'; // хост

$mysql = new mysqli($host, $user, $password, $bd);

// Проверка на подключение
if (!$mysql) {
    die("Connection failed: " . mysqli_connect_error());
}

// Получаем данные 
$data = $_POST['data'];

// Получаем из куки какому пользователю менять данные 
$loginProfil = $_COOKIE['user'];

// Получаем все данные из бд по логину
$result = $mysql->query("UPDATE `user` SET `balance`='$data[0]', `a`=$data[1], `b`=$data[2], `c`=$data[3] WHERE `login` = '$loginProfil'");

echo $result;