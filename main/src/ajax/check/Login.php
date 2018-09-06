<?php
session_start();
require_once ("../../User.php");
$json = json_decode($_POST['json']);
$user = new User();
$session = $user->login($json);
print_r(json_encode($session));
$_SESSION = $session;
//$_SESSION['email'] = $session->mail;
//$_SESSION['password'] = $session->settingsContactVisible;


