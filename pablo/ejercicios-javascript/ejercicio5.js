const arg = require('yargs').argv
 // Aqui accedemos a la variable “nombre” que sera pasada al ejecutar el comando 
 
 function calcularEdad()
         // cogemos los valores actuales
         var fecha_hoy = new Date();
         var ahora_ano = fecha_hoy.getYear();
         var ahora_mes = fecha_hoy.getMonth()+1;
         var ahora_dia = fecha_hoy.getDate();
 
         // realizamos el calculo
         var edad = (ahora_ano + 1900) - ano;
         if ( ahora_mes < mes ){edad--;}
         if ((mes == ahora_mes) && (ahora_dia < dia)){edad--;}
         if (edad > 1900){edad -= 1900;}
            

