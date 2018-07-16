<?php
session_start();
if ($_SESSION['id']) {
    echo $_SESSION['id'];
} else {
    echo false;
}
