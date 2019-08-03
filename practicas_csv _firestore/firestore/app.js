
//aki ingreso datos a firestore
const admin = require('firebase-admin');
var serviceAccount = require("./permisos.json");
admin.initializeApp({credential: admin.credential.cert(serviceAccount)
});
var db = admin.firestore();

const putoNuevoJson = require("csvToJson");
console.log(putoNuevoJson);


var putoNuevoJson = db.collection('CSV').doc('JSON');
  var setAda = putoNuevoJson.set({
    first: 'IronMAN',
    last: 'Rosas',
    born: 1815
  });
  

