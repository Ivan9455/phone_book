<?php
require_once ("main/src/db/DataBase.php");
$db = new DataBase();
//$sql = "SELECT `id` FROM `user` WHERE `mail`='ivan' AND `password`='1111';";
//$sql = "SELECT * FROM `user`";
//$res = mysqli_query($db->isDb(),$sql);
//while($pole = mysqli_fetch_assoc($res)){
//    echo "<pre>";
//    print_r($pole);
//    echo "</pre>";
//}

$contact['id_user'] = 1;
$contact['phone'] =1;
$contact['name'] = 1;
$contact['gps'] = 1;
$contact['vk'] = 1;
$contact['info'] = 1;
$sql = "INSERT INTO `contact` (`id`,`id_user`,`phone`,`name`,`gps`,`vk`,`info`) 
VALUES (
NULL,
'".$contact['id_user']."',
'".$contact['phone']."',
'".$contact['name']."',
'".$contact['gps']."',
'".$contact['vk']."',
'".$contact['info']."'
);";
mysqli_query($db->isDb(),$sql);
print_r($contact);
?>
