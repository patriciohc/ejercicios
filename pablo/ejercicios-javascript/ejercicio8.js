const arg = require('yargs').argv 
   function  promedio (array1) {
      var array1 = JSON.parse(arg.arreglo);
         suma = 0;
            for ( var i = 0; i <array1.length; i ++) {
            suma += array1[ i ];
         }
    return suma/array1.length       
   }

function numMaximo (array2){ 
    var array2 = JSON.parse(arg.arreglo);
        max = array2[0];
           for (var x = 0; x < array2.length; x++) {
             if ( max < array2[x] ) {
                max = array2[x]; 
             } 
           }
    return max  
}

 function numMinimo(array3) {
     var array3 = JSON.parse(arg.arreglo);
         min = array3 [ 0 ];
            for ( var y = 0;  y > array3.length;  y++) {
                if (min > array3 [ y ] ) {
                   min = array3[y];
                 }
            }
   return min
 }

  console.log("Promedio:"+ promedio())
     console.log("Maximo: "+ numMaximo())
         console.log("Minimo: "+ numMinimo())