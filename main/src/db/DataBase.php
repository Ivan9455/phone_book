<?php


class DataBase
{
    private $host = "localhost";
    private $user = "e95021w0_db";
    private $password = "S%g9wVSo";
    private $database = "e95021w0_db";

    private $db;

    /**
     * @return bool
     */
    public function isDb()
    {
        return $this->db;
    }

    /**
     * DataBase constructor.
     */

    public function __construct()
    {
        $this->db = mysqli_connect($this->host, $this->user, $this->password,$this->database);
    }

}