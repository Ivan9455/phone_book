<?php
require_once ("../User.php");
$user = new User();
$json = json_decode($_POST['json']);
$user->contact_refresh_info($json);
print_r($json);