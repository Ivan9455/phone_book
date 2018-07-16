<?php
session_start();
require_once ("../../User.php");
$json = json_decode($_POST['json']);
$user = new User();
$session = $user->login($json);
print_r($session);
$_SESSION['id'] = $session['id'];
$_SESSION['email'] = $session['email'];
$_SESSION['password'] = $session['password'];