
const arg = require('yargs').argv
// Aqui accedemos a la variable “fecha” que sera pasada al ejecutar el co


function calcularEdad( arg.fecha, arg.mes, arg.dia){
    var hoy = new Date();
    var cumpleanos =new Date();
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())){
        console.log("Edad="+ calcularEdad)      }
    }    


         
    
