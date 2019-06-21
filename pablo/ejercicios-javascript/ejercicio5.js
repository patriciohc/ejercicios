


   const arg = require('yargs').argv
 // Aqui accedemos a la variable “fecha” que sera pasada al ejecutar el comando 
      
 
    var f=new Date();
    
      console.log("Tienes "+(f.getFullYear()-arg.fecha)
      +" años, "+"con "+(f.getMonth()+1 - arg.mes)+" meses"+"y ya no se cuantos pinxes dias")
             