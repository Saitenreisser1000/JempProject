<?php

$host = 'sql313.epizy.com';
$user = 'epiz_24308112';
$pw = 'E8Iyl6iOfpbkfKr';
$database = 'epiz_24308112_jempdata';

$db = mysqli_connect($host, $user, $pw, $database);

if(mysqli_connect_error()){
        
        die("Fehler bei der Verbindung zur guitarjempdata Datenbank");   
}

//data from javascript is set
if(isset($_POST['songName']) && isset($_POST['songData'])){

    $songName = $_POST['songName'];
    $songData = $_POST['songData'];
 
    $query = "INSERT INTO songDB (songName, songData) VALUES ('$songName', '$songData')";
    
    mysqli_query($db, $query);
}

//sql query all songs
$result = mysqli_query($db, "SELECT * FROM songDB");
$data = array();
while($row = mysqli_fetch_assoc($result))
{
    $data[] = $row;
}

echo json_encode($data);

?>