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
        $sql = "SELECT `id` FROM `user` WHERE `mail`='" . $user->email . "' AND `password`='" . $user->password . "';";
        $result = mysqli_fetch_assoc(mysqli_query($this->db->isDb(), $sql));
        if ($result != null) {
            $session['id'] = $result['id'];
            $session['email'] = $user->email;
            $session['password'] = $user->password;
            return $session;
        } else {
            return 0;
        }
    }

    public function registration($user)
    {
        $sql = "SELECT `id` FROM `user` WHERE `mail`='" . $user->email . "'";
        $result = mysqli_fetch_assoc(mysqli_query($this->db->isDb(), $sql));
        if ($result == null) {
            $sql = "INSERT INTO `user` (`id`,`mail`,`password`) 
VALUES (
NULL,
'" . $user->email . "',
'" . $user->password . "');";
            mysqli_query($this->db->isDb(), $sql);
            return true;
        } else {
            return false;
        }
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
'" . $contact->id_user . "',
'" . $contact->phone . "',
'" . $contact->name . "',
'" . $contact->gps . "',
'" . $contact->vk . "',
'" . $contact->info . "'
);";
        mysqli_query($this->db->isDb(), $sql);
    }

    public function contact_update($id)
    {
        $sql = "SELECT * FROM `contact` WHERE `id_user`='".$id."';";
        $res = mysqli_query($this->db->isDb(), $sql);
        $arr = [];
        while ($result = mysqli_fetch_assoc($res)) {
            array_push($arr, $result);
        }
        return json_encode($arr);
    }

    public function contact_refresh_info($contact_new_info)
    {
        $sql = "
        UPDATE `contact` SET 
        `phone` = '" . $contact_new_info->phone . "', 
        `name` = '" . $contact_new_info->name . "', 
        `gps` = '" . $contact_new_info->gps . "', 
        `vk` = '" . $contact_new_info->vk . "', 
        `info` = '" . $contact_new_info->info . "' 
        WHERE `contact`.`id` = '" . $contact_new_info->id . "'
        ";
        mysqli_query($this->db->isDb(), $sql);
    }

    public function add_comment($comment)
    {
        $sql = "INSERT INTO `comment_contact` (`id_contact`,`comment`,`date`) 
VALUES (
'" . $comment->id . "',
'" . $comment->comment . "',
'" . $comment->date . "'     
        )";
        mysqli_query($this->db->isDb(), $sql);
    }

    public function load_comment($id)
    {
        $sql = "SELECT * FROM `comment_contact` WHERE `id_contact`='" . $id . "';";
        $res = mysqli_query($this->db->isDb(), $sql);
        $arr = [];
        while ($result = mysqli_fetch_assoc($res)) {
            array_push($arr, $result);
        }
        return json_encode($arr);
    }
}