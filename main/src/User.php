<?php
require_once("db/DataBase.php");


class User
{
    private $db;

    /**
     * User constructor.
     */
    public function __construct()
    {
        $this->db = new DataBase();
    }


    public function login($user)
    {
        $sql = "SELECT `id` FROM `user` WHERE `mail`='" . $user['email'] . "' AND `password`='" . $user['password'] . "';";
        $result = mysqli_fetch_assoc(mysqli_query($this->db->isDb(), $sql));
        if ($result != null) {
            $session['id'] = $result['id'];
            $session['email'] = $user['email'];
            $session['password'] = $user['password'];
            return $session;
        } else {
            return 0;
        }
    }

    public function registration()
    {

    }

    public function __destruct()
    {
        mysqli_close($this->db->isDb());
    }

    public function add_contact($contact)
    {
        $sql = "INSERT INTO `contact` (`id`,`id_user`,`phone`,`name`,`gps`,`vk`,`info`) 
VALUES (
NULL,
" . $contact['id_user'] . ",
'" . $contact['phone'] . "',
'" . $contact['name'] . "',
'" . $contact['gps'] . "',
'" . $contact['vk'] . "',
'" . $contact['info'] . "'
);";
        mysqli_query($this->db->isDb(), $sql);
    }

    public function contact_update()
    {
        $sql = "SELECT * FROM `contact`;";
        $res = mysqli_query($this->db->isDb(), $sql);
        $arr = [];
        while ($result = mysqli_fetch_assoc($res)) {
            array_push($arr,$result);
        }
        return json_encode($arr);
    }

    public function  contact_refresh_info($contact_old_info,$contact_new_info){
        $sql = "
        UPDATE `contact` SET 
        `phone` = '".$contact_old_info['phone']."', 
        `name` = '".$contact_old_info['name']."', 
        `gps` = '".$contact_old_info['gps']."', 
        `vk` = '".$contact_old_info['vk']."', 
        `info` = '".$contact_old_info['info']."' 
        WHERE `contact`.`id` = '".$contact_old_info['id']."'
        ";
        mysqli_query($this->db->isDb(), $sql);
    }
}