<?php
 $inputJSON = file_get_contents('php://input');
 $input = json_decode($inputJSON, TRUE);
 
 $conect = new mysqli('127.0.0.1','root','','crud');
 if($_SERVER['REQUEST_METHOD'] == 'GET'){
    
        $data = array();
        $sql = $conect->query("SELECT * FROM `datacrud`");
        while ($d = $sql->fetch_assoc()) {
            $data[] = $d;   
    }
    exit(json_encode($data));
}

else if($_SERVER['REQUEST_METHOD'] == 'POST'){

    if(isset($input['name']) and isset($input['adress'])){
        
        $conect->query("INSERT INTO `datacrud` (`full_name`, `addresss`, `phone`) VALUES('$input[name]','$input[adress]','$input[phone]')");
        $sql = $conect->query("SELECT * FROM `datacrud` ORDER BY id DESC LIMIT 1");
        $data = $sql->fetch_assoc();
        exit(json_encode($data));
    } else exit(json_encode( array("status" => 'Error')));

    
    
}
else if($_SERVER['REQUEST_METHOD'] == 'PUT'){
    if(isset($input['name'])){
        $conect->query("UPDATE `datacrud` SET full_name = '$input[name]', addresss = '$input[address]', phone = '$input[phone]'  WHERE full_name = '$input[name]'");
        $sql = $conect->query("SELECT * FROM `datacrud` ORDER BY id DESC LIMIT 1");
        $data = $sql->fetch_assoc();
        exit(json_encode($data));
    }
    else exit('gg');
    
   
}
else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
        if(isset($input['name'])){
        $data = null;
        $conect->query("DELETE  FROM `datacrud` WHERE full_name = '$input[name]'");
        exit(json_encode($data));
    } else exit(json_encode('error'));
}
?>