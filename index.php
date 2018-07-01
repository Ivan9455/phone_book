<?php
session_start();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main/src/css/index.css">
</head>
<body>

<script type="text/javascript" src="main/src/js/index.js"></script>
<div class="content">
    <div class="switch_form">
        <div class="form_switch status" id="status_login">
            Авторизация
        </div>
        <div class="form_switch" id="status_registration">
            Регистрация
        </div>
    </div>
    <div class="login_form" id="login_form">
        <label for="email_login">E-mail</label>
        <input type="text" id="email_login" placeholder="E-mail">
        <label for="password_login">Пароль</label>
        <input type="password" id="password_login" placeholder="Пароль">
        <input type="button" id="go_login" value="Войти">
    </div>
    <div class="registration_form hidden" id="registration_form">
        <label for="email_registration">E-mail</label>
        <input type="text" id="email_registration" placeholder="E-mail">
        <label for="password_registration">Пароль</label>
        <input type="password" id="password_registration" placeholder="Пароль">
        <label for="password_registration2">Повторите пароль</label>
        <input type="password" id="password_registration2" placeholder="Пароль">
        <input type="button" id="go_registration" value="Зарегистрироваться">
    </div>
</div>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
</body>
</html>