<?php
session_start();
if ($_SESSION['id']) {
    print_r(json_encode($_SESSION));
} else {
    echo false;
}
