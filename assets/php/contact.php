<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );

$myemail = 'nat@nbhdesign.com.au';

$name = $_REQUEST["name"];

$email_address = $_REQUEST["email"];

$message = $_REQUEST["message"];




    $from = $myemail;
    $to = $myemail;
    $subject = "New contact from " . $name;
    $message = "Message: \n \n" .
    $message . "\n \n" . "Contact email: \n \n" .
    $email_address;
    $headers = "From: " . $myemail;
    if(mail($to,$subject,$message, $headers)){
    echo "Thanks for contacting us.";
    header('Location: /index.html/getintouch.html/getintouchthanks.html');
    };

exit();
?>
