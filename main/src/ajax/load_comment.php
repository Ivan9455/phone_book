<?php
require_once ("../User.php");
$id = $_POST['id'];
$user = new User();
print_r($user->load_comment($id));
