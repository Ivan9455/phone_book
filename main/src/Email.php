<?php

require_once('db/DataBase.php');

class Email
{

    private $db;
    private $data;

    public function __construct()
    {
        $this->db = new DataBase();
    }

    public function getNewPassword($email)
    {
        $sql = "SELECT `id` FROM `user` WHERE `mail`='" . $email . "'";
        $result = mysqli_fetch_assoc(mysqli_query($this->db->isDb(), $sql));
        if($result!=null){
            $new_password = $this->generate_password();
            $sql = "
        UPDATE `user` SET 

        `password` = '" . $new_password  . "' 
        WHERE `user`.`id` = '" . $result['id'] . "'
        ";
            mysqli_query($this->db->isDb(), $sql);
            $header = "Сброс пароля для входа:";

            $subject = 'the subject';
            $message = 'hello';
            $headers = 'From: webmaster@example.com' . "\r\n" .
                'Reply-To: webmaster@example.com' . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

            mail($email, $subject, $message, $headers);
            //mail($email,$header,"Ваш новый пвроль для входа на сайт: ".$new_password );
            return $email;
        }
        else {
            return false;
        }
    }
    private function generate_password()
    {
        $number = $a = rand(6,16);
        $arr = array('a','b','c','d','e','f',

            'g','h','i','j','k','l',

            'm','n','o','p','q','r','s',

            't','u','v','w','x','y','z',

            'A','B','C','D','E','F',

            'G','H','I','J','K','L',

            'M','N','O','P','Q','R','S',

            'T','U','V','W','X','Y','Z',

            '1','2','3','4','5','6',

            '7','8','9','0');

        // Генерируем пароль

        $pass = "";

        for($i = 0; $i < $number; $i++)

        {

            // Вычисляем случайный индекс массива

            $index = rand(0, count($arr) - 1);

            $pass .= $arr[$index];

        }

        return $pass;

    }



}