<?php
session_start();
require_once ("../User.php");
$contact['id_user'] = $_SESSION['id'];
$contact['phone'] = $_POST['phone'];
$contact['name'] = $_POST['name'];
$contact['gps'] = $_POST['gps'];
$contact['vk'] = $_POST['vk'];
$contact['info'] = $_POST['info'];
$user = new User();
$user->add_contact($contact);