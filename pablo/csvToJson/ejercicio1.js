
const archivocsv = "./BD Calorias FINAL.csv"
const csv = require("csvtojson")
csv ()
.fromFile(archivocsv)
.then((jsonObj) => {
  var nuevoJson = []; // declaro un array vacio para almacenar
  for (var i = 0;  i<jsonObj.length;  i++){//ciclo para recorrer cada uno de los elementos dl arreglo
    var x = jsonObj[i]; // le paso el valor de cada uno de los elementos a x.
    var opciones = [ // declaro una var para contener 3 valores de 3 propiedades de cada uno de los
      x.R1,  // elementos.
      x.R2,
      x.R3
    ];
    var recorriendo =  {  // creo un nuevo elemento coN el texto mas el nombre del elemntos mas 
        ID: x.ID,         // el nombre de la propiedad para asi mostrar su valor de las propiedad
        DESCRIPCION: x.DESCRIPCION,
        opciones: opciones,
        RESP_OK: x.RESP_OK
      };
      nuevoJson.push(recorriendo);// ala var nuevoJson le METO el nuevo elemnto recorriendo
      
    }
console.log(nuevoJson)
  });