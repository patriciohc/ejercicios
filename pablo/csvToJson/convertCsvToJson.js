const csv = require("csvtojson")

const archivocsv = "./BD_Conocimientos.csv"

async function convertCsvToJson(category = 'capacitacion') {
  var lines = await csv().fromFile(archivocsv)
  var questions = [];
  for (var i = 0; i < lines.length;  i++) {
    var line = lines[i];
    var answers = [line.R1.trim(), line.R2.trim(), line.R3.trim()];
    var question =  {
      id: line.ID,
      text: line.DESCRIPCION.trim(),
      answers: answers,
      correct_answer: line.RESP_OK.trim(),
      category: category
    };
    if (line.IMAGEN) {
      question.image = line.IMAGEN.trim();
    }
    questions.push(question);
  }
  return questions;
}

module.exports = convertCsvToJson;