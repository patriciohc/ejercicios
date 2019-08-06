
//aki ingreso datos a firestore
const admin = require('firebase-admin');
var serviceAccount = require("./permisos.json");
admin.initializeApp({credential: admin.credential.cert(serviceAccount)
});
var db = admin.firestore();

var pNuevoJson = db.collection('CSV').doc('JSON');
  var main = pNuevoJson.set({
    first: 'IronMAN',
    last: 'Rosas',
    born: 1815
  });
  console.log(main);

