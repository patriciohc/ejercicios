const archivocsv = "Hoja 1.csv"
const csv = require('csvtojson')
csv ()
.fromFile(archivocsv)
.then((jsonObj) => {
  var nuevoJson = []; // declaro un array vacio para almacenar
  for (var i = 0;  i<jsonObj.length;  i++){//ciclo para recorrer cada uno de los elementos dl arreglo
    var x = jsonObj[i]; // le paso el valor de cada uno de los elementos a x.
    var opciones = [ // declaro una var para contener 3 valores de 3 propiedades de cada uno de los
      x.respuesta_1,  // elementos.
      x.respuesta_2,
      x.respuesta_3
    ];
      var recorriendo =  {  // creo un nuevo elemento co el texto mas el nombre del elemntos mas 
        id: x.id,         // el nombre de la propiedad para asi mostrar su valor de las propiedad
        titulo: x.titulo,
        imagen: x.imagen,
        opciones: opciones,
        respuesta_correcta: x.respuesta_correcta
      };
    nuevoJson.push(recorriendo);// ala var nuevoJson le empujo el nuevo elemnto recorriendo
} 
//aki subire el nuevoJson a firestore.
const admin = require('firebase-admin');
var serviceAccount = require("./permisos.json");
admin.initializeApp({credential: admin.credential.cert(serviceAccount)
});
var db = admin.firestore();

var nuevoJson = db.collection('CSV').doc('JSON');
  //var main = nuevoJson.set({born: 1815});

console.log(nuevoJson)
 
}); 