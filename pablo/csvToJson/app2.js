
//aki ingreso datos a firestore
const admin = require('firebase-admin');
var serviceAccount = require("./permisos.json");
admin.initializeApp({credential: admin.credential.cert(serviceAccount)
});
var db = admin.firestore();
var nuevoJson = db.collection('Abc').doc('Nuevos');
  var main = nuevoJson.set({ ID: '1',
  DESCRIPCION: '1 manzana aporta:',
  opciones: [ '36', '7', '55' ],
  RESP_OK: '55' },
{ ID: '2',
  DESCRIPCION: '1 naranja aporta:',
  opciones: [ '29', '31', '36' ],
  RESP_OK: '36' }
  
  );
  


