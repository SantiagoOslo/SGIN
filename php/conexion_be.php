<?php


    $conexion = mysqli_connect("localhost", "root", "", "login_register_db");


    if (!$conexion) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>