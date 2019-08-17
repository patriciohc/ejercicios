const admin = require('firebase-admin');
const serviceAccount = require("./permisos.json");
const convertCsvToJson = require('./convertCsvToJson.js')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function saveQuestions() {
  var db = admin.firestore();
  let questions = await convertCsvToJson();
  for (let i = 0; i < questions.length; i++) {
    await db.collection('questions_test')
      .doc(questions[i].id)
      .set(questions[i]);
    console.log(questions[i], 'completed!')
  }
}

saveQuestions();