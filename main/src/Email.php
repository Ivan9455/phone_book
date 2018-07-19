<?php

require_once('db/DataBase.php');

class Email
{

    private $db;
    private $data;

    public function __construct($email)
    {
        //$this->data['email'] = ;
        $this->db = new DataBase();
    }

    public function send()
    {
//        $this->error = mail($this->email['to_email'], $this->email['header'],
//            $this->email['additional_params']." ".$this->email['message']
//            , $this->email['additional_params']) ? 0 : 1;
    }

    public function send_database()
    {
//        $sql = "INSERT INTO `table_toemail` (`id`,`name`,`phone`,`email`,`message`)
//                VALUES (NULL ,
//                '".$this->data['name']."',
//                '".$this->data['phone']."',
//                '".$this->data['email']."',
//                '".$this->data['message']."');";
//        mysqli_query( $this->db->getDb(),$sql);
    }

}