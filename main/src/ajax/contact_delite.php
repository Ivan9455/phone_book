<?php
require_once ("../User.php");
$user = new User();
$json = $_POST['json'];
print_r($json);
$user->contact_delite($json);