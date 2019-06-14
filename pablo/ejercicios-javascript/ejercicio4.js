
const arg = require('yargs').argv


 if(arg.operacion==="suma"){console.log("resultado= " +(arg.a + arg.b));}  
else if(arg.operacion==="resta"){console.log("resultado= "+(arg.a - arg.b));}
 else if(arg.operacion==="multiplicacion"){ console.log("resultado= " +(arg.a * arg.b));}
else if(arg.operacion==="division"){ console.log("resultado= " +(arg.a / arg.b));}
 else{console.log("Error");}