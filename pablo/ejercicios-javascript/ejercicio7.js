const arg = require('yargs').argv

    var nuevoarray= JSON.parse(arg.arreglo);
 
    var suma = 0;

    for (var i=0 ; i<nuevoarray.length; i++){
            suma += nuevoarray[i];
    }
         
    function promedio (nuevoarray){
         return (suma/nuevoarray.length);
    }


        console.log("promedio: "+ promedio)

