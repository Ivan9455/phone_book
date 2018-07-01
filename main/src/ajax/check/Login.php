<?php
session_start();
require_once ("../../User.php");
$user = new User();
$userP['email'] = $_POST['email'];
$userP['password'] = $_POST['password'];
$session = $user->login($userP);
print_r($session);
$_SESSION['id'] = $session['id'];
$_SESSION['email'] = $session['email'];
$_SESSION['password'] = $session['password'];