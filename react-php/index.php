<?php

    $conn = mysqli_connect('localhost','root','','test');
    $name = $_POST['name'];
    $email = $_POST['email'];
    $class = $_POST['class'];
    
    $sql = "INSERT INTO data (name,class,email) VALUES('$name','$class','$email')";

    if(mysqli_query($conn,$sql)){
        echo "Successfully sent.";
    }else{
        echo "Error!, Message not sent.".mysqli_error($conn);
    }

?>