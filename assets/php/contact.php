<?php
if (isset($_POST)) {
    $to = "howes.j.j@gmail.com";
    $subject = 'New enquiry';
    $data = json_decode(file_get_contents('php://input'), true);
    $message = 'Name: '.$data['name'].' Email: '.$data['emailInput'.' Message: '.$data['message']];
    $success = mail($to, $subject, $message);
    if ($success) {
        echo "Success!";
    }
    else {
        echo "Fail";
    }
}
?>
