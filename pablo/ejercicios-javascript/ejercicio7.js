const arg = require('yargs').argv
    
var nuevoarray=JSON.parse(arg.arreglo);
var suma = 0; 
var max=0;
var min=0;

for(var i=0 ; i<nuevoarray.length; i++)
        {
           suma += nuevoarray[i];
        }

for(var i=0;i<nuevoarray.length;i++)
{
  if(max<nuevoarray[i])
  {
      max=nuevoarray[i]; 
  }
}


for(var i=0;i>nuevoarray.length;i++)
{
       if(min>nuevoarray[i])
       {
           min>=nuevoarray[i]; 
       }
}

console.log("Promedio= "+(suma/nuevoarray.length))
console.log("Maximo="+ Math.max(max)) 
console.log("Minimo="+ Math.min(min)) 



