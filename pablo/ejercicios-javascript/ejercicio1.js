/*const arg = require('yargs').argv
   var x = JSON.parse(arg.a);   
      var y = JSON.parse(arg.b);
      console.log("total = " + (x + y))*/
 
const arg = require('yargs').argv
    var resultado = sumaSi();
             function sumaSi(s, f) {
                var s = JSON.parse(arg.a);
                   var f = JSON.parse(arg.b);
                     return s+f
             } 
        console.log("la suma es: " + resultado) 
