<?php
session_start();
//print_r($_SESSION['id']);
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main/src/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="main/src/bootstrap/css/bootstrap-grid.css">
    <link rel="stylesheet" href="main/src/bootstrap/css/bootstrap-reboot.css">
    <link rel="stylesheet" href="main/src/css/user.css">
</head>
<body>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="main/src/js/user.js"></script>
<div class="container" id="content">
    <div class="row margin-10-0">
        <div class="col-lg-10 col-md-9 float-left">
            <div class="col-lg-3 col-md-6 float-left text-center margin-5-0" >
                <div class="user_data" id="add_contact">
                    Добавить контакт
                </div>
            </div>
            <div class="col-lg-3 col-md-6 float-left text-center margin-5-0">
                <div class="user_data">Добавить событие</div>
            </div>
        </div>
        <div class="col-lg-2 col-md-3 float-right text-center" >
            <div class="col-12">
                <div class="user_data margin-5-0" id="user_exit">Выход</div>
            </div>
        </div>
        <div class="col-lg-12 col-md-12 float-left text-center margin-5-0">
            <div class="user_email">
                <?php echo $_SESSION['email']; ?>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-6 float-left">
            <div class="user_and_phone" id="user_and_phone">

            </div>
        </div>
        <div class="col-lg-8 col-md-6 float-left">
            <div class="user_info" id="user_info">

            </div>
        </div>
    </div>
</div>
</body>
</html>
