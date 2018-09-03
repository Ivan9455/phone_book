<?php
class Session {
    public function check(){
        if(isset($_SESSION['id'])&&$_SESSION['email']&&$_SESSION['password']){
            header("Location:user.php");
        }
        else{
            header("Location:index.php");
        }
    }
    public function user_exit(){
        $_SESSION['id'] = null;
        $_SESSION['email'] = null;
        $_SESSION['password'] = null;
    }
}