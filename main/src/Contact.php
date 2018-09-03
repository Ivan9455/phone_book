<?php
require_once("db/DataBase.php");

class Contact
{
    private $db;

    /**
     * Contact constructor.
     */
    public function __construct()
    {
        $this->db = new DataBase();
    }

    function add_contact($contact)
    {

    }
}