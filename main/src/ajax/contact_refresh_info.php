<?php
require_once ("../User.php");
$user = new User();
$user->contact_refresh_info($_POST['old_info_contact'],$_POST['new_info_contact']);