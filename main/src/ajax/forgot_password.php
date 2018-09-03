<?php
require_once ("../Email.php");
$email = new Email();
//print_r($user->getNewPassword($_POST['email']));
$res = mail("shaman1861@mail.ru,paderin94126@gmail.com", "", "", "");
echo $res;
$data = [];
$data['to_email'] = "shaman1861@mail.ru";//$parametrEmail['to_email'];upgreat@55.ru
$data['header'] = 'Readium.pro: "Тест-проверка связи ау"';
$data['message'] = "1";
$data['additional_params'] = "From: name ; phone ; email ; \r\n";
mail($data['to_email'], $data['header'],
    $data['additional_params']." ".$data['message']
    , $data['additional_params']);