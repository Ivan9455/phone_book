<?php
session_start();
//print_r($_SESSION['id']);
//print_r($_SESSION['email']);
//print_r($_SESSION['password']);
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main/src/css/user.css">
</head>
<body>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="main/src/js/user.js"></script>
<div class="content width">
    <div class="user_data width">
        <div class="add_contact" id="add_contact"></div>
        <div class="user_email">
            <?php echo $_SESSION['email']; ?>
        </div>
        <div class="user_exit" id="user_exit">Выход</div>
    </div>
    <div class="width">
        <div class="user_and_phone" id="user_and_phone">

        </div>
        <div class="user_info" id="user_info">
            <div class="user_add" id="user_add">
                <table>
                    <tr>
                        <td>Номер телефона:</td>
                        <td>
                            <input type="text" id="phone">
                        </td>
                    </tr>
                    <tr>
                        <td>Имя:</td>
                        <td>
                            <input type="text" id="name">
                        </td>
                    </tr>
                    <tr>
                        <td>Место:</td>
                        <td>
                            <input type="text" id="gps">
                        </td>
                    </tr>
                    <tr>
                        <td>Вк:</td>
                        <td>
                            <input type="text" id="vk">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">Что знаю:</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <textarea class="text_info" id="info"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div class="add_user" id="add_user" >Добавить</div>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="user_get_info" id="user_get_info">

            </div>
        </div>
    </div>
</div>
</body>
</html>
