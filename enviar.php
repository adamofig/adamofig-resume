<?php

$destino= "jordan.figu@gmail.com";
$Correo= $_POST["Correo"];
$Mensaje= $_POST["Mensaje"];
$contenido=  "Correo: " . $Correo ."\nMensaje: " . $Mensaje;

mail($destino,"contacto",$contenido);
header("Location:index.html");

?>
