<?php
session_start();
if ($_SESSION['id']) {
    echo true;
} else {
    echo false;
}
