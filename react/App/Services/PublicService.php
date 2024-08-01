<?php
include_once '../../App/db_config.php';
$GLOBALS['conn'] = connectToDb('localhost', 'root', '', 'testdb');

class PublicService{
    public static function getCount($table_name){
        global $conn;
        $rowcount = null;
        $query = "SELECT * FROM `$table_name`;";
        if($result = mysqli_query($conn, $query)){
            $rowcount=mysqli_num_rows($result);
        }
        return $rowcount;
    }
}