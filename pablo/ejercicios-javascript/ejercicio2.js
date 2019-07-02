const arg = require('yargs').argv
 
 var r=JSON.parse(arg.radio);
  
function areacirculo(r){
          return Math.PI*(r*r);
          }
          var resultado = areacirculo(r);
          
          
          function perimetrocirculo(r){
              return Math.PI*(r+r);
            }  
            
            var resultado2 = perimetrocirculo(r);       

     console.log("Area= "+resultado)
     console.log("Perimetro = "+resultado2)


