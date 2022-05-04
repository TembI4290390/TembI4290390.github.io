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

// Получаем весь массив данных с формы регистрации 
$array = $_POST['data'];

// Кодируем пароль
$passwordUser = md5($array[4]."2qsS0dSu");

// Записываем данные пользователя
$mysql->query("INSERT INTO `user` (`name`, `surname`, `middle_name`, `сard_number`, `password`, `login`, `balance`, `a`, `b`, `c`) VALUES ('$array[0]','$array[1]','$array[2]',0,'$passwordUser','$array[3]',0,0,0,0)");

// Проверяем запись
if($mysql)
    echo "Аккаунт создан";
else
    echo "Ошибка: " . $mysql->error;

$mysql->close();

