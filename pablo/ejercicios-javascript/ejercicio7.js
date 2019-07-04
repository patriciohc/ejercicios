const arg = require('yargs').argv

    var promedio1= JSON.parse(arg.arreglo);
       
       
        function promedio (promedio1){
              
            var suma = 0;
            
            for ( var i= 0;  i<promedio1.length; i++ )
               
               suma = suma + promedio1 [i];
           
             return (suma/promedio1.length);
       
            }
         
            console.log("promedio:"+ promedio)
  
