const arg = require('yargs').argv
 // Aqui accedemos a la variable “nombre” que sera pasada al ejecutar el comando 


  console.log("Perimetro = " + Math.PI*(arg.radio)*2)
  console.log("Area ="+Math.PI*(arg.radio)*(arg.radio) )
