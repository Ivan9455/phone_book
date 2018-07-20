<?php
session_start();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous">
    <link rel="stylesheet" href="main/src/css/index.css">
</head>
<body>
<script type="text/javascript" src="main/src/js/index.js"></script>


<div class="content">
    <div class="switch_form">
        <div class="form_switch status b1" id="status_login">
            Авторизация
        </div>
        <div class="form_switch b2" id="status_registration">
            Регистрация
        </div>
    </div>

    <table id="login_form">
        <tr>
            <td>
                <label for="email_login">E-mail</label>
            </td>
        </tr>
        <tr>
            <td>
                <input type="text" id="email_login" placeholder="E-mail">
            </td>
        </tr>
        <tr>
            <td>
                <label for="password_login">Пароль</label>
            </td>
        </tr>
        <tr>
            <td>
                <input type="password" id="password_login" placeholder="Пароль">
            </td>
        </tr>
        <tr>
            <td>
                <div id="go_login" >Войти</div>
            </td>
        </tr>
        <tr>
            <td>
                <div id="forgot">Забыли пароль?</div>
            </td>
        </tr>
    </table>
    <table class="hidden" id="registration_form">
        <tr>
            <td>
                <label for="email_registration">E-mail</label>
            </td>
        </tr>
        <tr>
            <td>
                <input type="text" id="email_registration" placeholder="E-mail">
            </td>
        </tr>
        <tr>
            <td>
                <label for="password_registration">Пароль</label>
            </td>
        </tr>
        <tr>
            <td>
                <input type="password" id="password_registration" placeholder="Пароль">
            </td>
        </tr>
        <tr>
            <td>
                <div id="go_registration">Зарегистрироваться</div>
            </td>
        </tr>
    </table>
    <table class="hidden" id="forgot_form">
        <tr>
            <td>
                <label for="email_forgot">E-mail</label>
            </td>
        </tr>
        <tr>
            <td>
                <input type="text" id="email_forgot" placeholder="E-mail">
            </td>
        </tr>
        <tr>
            <td>
                <div id="go_forgot" >Сбросить пароль</div>
            </td>
        </tr>
    </table>
</div>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
</body>
</html>