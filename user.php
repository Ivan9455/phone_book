<?php
session_start();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="bootstrap/css/bootstrap-grid.css">
    <link rel="stylesheet" href="bootstrap/css/bootstrap-reboot.css">
    <link rel="stylesheet" href="main/src/css/user.css">
    <link rel="stylesheet" href="main/src/css/calendar.css">
</head>
<body>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="main/src/js/user.js"></script>
<div class="container" id="content">
    <div class="row margin-10-0">
        <div class="col-lg-10 col-md-9 float-left">
            <div class="col-lg-3 col-md-6 float-left text-center margin-5-0">
                <div class="user_data" id="add_contact">
                    Добавить контакт
                </div>
            </div>
            <div class="col-lg-3 col-md-6 float-left text-center margin-5-0">
                <div class="user_data">События</div>
            </div>
        </div>
        <div class="col-lg-2 col-md-3 float-right text-center">
            <div class="col-12">
                <div class="user_data margin-5-0" id="user_exit">Выход</div>
            </div>
        </div>
        <div class="col-lg-12 col-md-12 float-left text-center margin-5-0">
            <div class="settings float-left col-2 col-md-2 col-lg-1" onclick="settings_open()">
                <img class="settings_img" src="main/src/img/settings.png">
            </div>
            <div class="user_email col-10 col-md-10 col-lg-11">
                <?php echo $_SESSION['mail']; ?>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-5 col-md-6 float-left">
            <div class="user_and_phone" id="user_and_phone">

            </div>
        </div>
        <div class="col-lg-7 col-md-6 float-left block_in">
            <div class="user_info" id="user_info">

            </div>
        </div>
    </div>
</div>
<div class="settings_block text-center col-12 float-left hidden" id="settings_block">
    <!-- убрать класс hidden  //-->
    <div class="modal-close" onclick="settings_close()">

    </div>
    <div class="settings_radio float-left col-12">
        <h4>Настройки отображения акаунтов</h4>
        <div class="col-12 float-left">
            <label>
                <input type="radio" name="options" id="option1" value="0">
                Отображать только открытые контакты<br>
                <span>(По умолчанию)</span>
            </label>
        </div>
        <div class="col-12 float-left">
            <label>
                <input type="radio" name="options" id="option2" value="1">
                Отображать только скрытые контакты
            </label>
        </div>
        <div class="col-12 float-left">
            <label class="">
                <input type="radio" name="options" id="option3" value="2">
                Отображать все контакты
            </label>
        </div>
        <div class="col-12 float-left">
            <div class="settings_save user_data" onclick="settings_update()">Сохранить</div>
        </div>
    </div>
</div>
<script type="text/javascript" src="main/src/js/calendar_events.js" ></script>
</body>
</html>
