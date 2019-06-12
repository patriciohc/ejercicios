
const arg = require('yargs').argv


 if(operacion="suma"){console.log("resultado= " +(arg.a + arg.b));}  
else if(operacion="resta"){console.log("resultado= "+(arg.a - arg.b));}
 else if(operacion="multiplicacion"){ console.log("resultado= " +(arg.a * arg.b));}
else if(operacion="division"){ console.log("resultado= " +(arg.a / arg.b));}
 else{console.log("Error");}