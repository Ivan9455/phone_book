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


        </div>
    </div>
</div>
</body>
</html>
