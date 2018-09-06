<?php
require_once ("../User.php");
$json = $_POST['json'];
$user = new User();
$user->comment_delite($json);
