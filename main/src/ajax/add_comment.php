<?php
require_once ("../User.php");
$json = json_decode($_POST['json']);
$user = new User();
$user->add_comment($json);
print_r($json);
