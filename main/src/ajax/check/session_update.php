<?php
session_start();
$_SESSION['settingsContactVisible'] = $_POST['settingsContactVisible'];
print_r($_SESSION);