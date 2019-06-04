const arg = require('yargs').argv
 // Aqui accedemos a la variable “nombre” que sera pasada al ejecutar el comando 


  console.log("Perimetro = " + 3.1416*(arg.radio)*2)
  console.log("Area ="+3.1416*(arg.radio)*(arg.radio) )
