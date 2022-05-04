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
$passwordUser = md5($array[1]."2qsS0dSu");
$result = $mysql->query("SELECT * FROM `user` WHERE `login` = '$array[0]' AND `password` = '$passwordUser'");
$user = $result->fetch_assoc();

// Проверяем запись
if(count($user) == 0) {
    echo "Пользователь не найден";
    exit();
}

// Создаем куки
setcookie('user', $user['login'], time() + 3600 * 48, "/");

echo 'Привет ' . $user['name'];

$mysql->close();