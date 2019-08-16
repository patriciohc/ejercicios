const admin = require('firebase-admin');
const serviceAccount = require("./permisos.json");
const convertCsvToJson = require('./convertCsvToJson.js')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();
let jsonQuestions = convertCsvToJson();
for (let i = 0; i < questions.length; i++) {
  var nuevoJson = db.collection('questions').doc(questions.id);
  nuevoJson.set();
}

  


