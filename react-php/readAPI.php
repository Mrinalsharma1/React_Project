<?php

    $conn = mysqli_connect('localhost','root','','test');
    
    $sql = "SELECT * FROM data";
    $arr = Array();

    if(mysqli_query($conn,$sql)){
        $table = mysqli_query($conn,$sql);
        $i = 0;
        while($row = mysqli_fetch_assoc($table)){
            $arr[$i] = $row;
            $i++;
        }
        $data = json_encode($arr);
        echo ($data);
    }else{
        echo "Error!, Message not sent.".mysqli_error($conn);
    }

?>