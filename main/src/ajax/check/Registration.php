<?php
require_once ("../../User.php");
$json = json_decode($_POST['json']);
$user = new User();
print_r($user->registration($json));