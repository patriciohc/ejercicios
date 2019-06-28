const arg = require('yargs').argv

var hoy = new Date();
var cumple = new Date(arg.fecha);
var años = hoy.getFullYear() - cumple.getFullYear();

if (hoy.getMonth() < cumple.getMonth()) {
  años -= 1;
}

<<<<<<< HEAD
   const arg = require('yargs').argv
 // Aqui accedemos a la variable “fecha” que sera pasada al ejecutar el comando 
      
 
    var f=new Date();
    
      console.log("Tienes "+(f.getFullYear()-arg.fecha)
      +" años, "+"con "+(f.getMonth()+1 - arg.mes)+" meses"+"y ya no se cuantos dias")


    
             
=======
console.log("Tienes " + años)
>>>>>>> e33d6372f7a1bd05a14dce915baba5b2ceb831e8
