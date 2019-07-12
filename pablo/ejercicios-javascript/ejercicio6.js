const arg = require("yargs").argv
   var nuevoarray = JSON.parse (arg.arreglo);
      var suma = 0;
          for ( var i = 0 ;
                i < nuevoarray.length;
                   i ++ ) {
                suma += nuevoarray[i];
           }      console.log("Promedio= "+(suma/nuevoarray.length))
                    console.log("Maximo="+ Math.max.apply(null, nuevoarray)) 
                       console.log("Minimo="+ Math.min.apply(null, nuevoarray)) 
   
 
  
  