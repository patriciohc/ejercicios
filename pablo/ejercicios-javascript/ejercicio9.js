
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JSON</title>
</head>
<body>
<div id="info"></div>
<script type="text/javascript">

var personaJSON={
    "nombre" : "luis", 
  "apellido" : "Rosas",
      "edad" :  22, 
    "sueldo" :  2000
    };  
    var cliente = "";
       cliente += "Nombre:" + personaJSON.nombre + "<br/>";
       cliente += "Apellido:" + personaJSON.apellido + "<br/>";
       cliente += "Edad:" + personaJSON.edad + "<br/>";
       cliente += "Sueldo:" + personaJSON.sueldo + "<br/>";

    var elemento=document.getElementById("info");
        elemento.innerHTML=cliente;
    

  

</script>
</body>
</html>