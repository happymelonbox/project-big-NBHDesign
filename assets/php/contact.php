<?php

    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );


$myemail = 'howes.j.j@gmail.com';

$name = $_GET['name'];

$email_address = $_GET['email'];

$message = $_GET['message'];

$name = filter_var($name, FILTER_SANITIZE_STRING);

$email_address = str_replace(array("\r", "\n", "%0a", "%0d"), '', $email_address);
$email_address = filter_var($email_address, FILTER_VALIDATE_EMAIL);

$message = filter_var($message, FILTER_SANITIZE_STRING);

    $from = $myemail;
    $to = $myemail;
    $subject = "New contact from " . $name;
    $message = "Message: " .$message . "Contact email: " .$email_address;
    $headers = "From: " . $email_address;

    mail($to,$subject,$message, $headers);
    if(mail($to,$subject,$message, $headers)){
        echo "success!";
        } else {
            echo "failed!";
        };

?>
