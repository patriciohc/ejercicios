
const archivocsv = "./BD Calorias FINAL.csv"
const csv = require("csvtojson")

function convertCsvToJson(category = 'calorias') {
  csv ()
  .fromFile(archivocsv)
  .then(lines => {
    var questions = [];
    for (var i = 0; i < lines.length;  i++) {
      var line = lines[i];
      var answers = [line.R1, line.R2, line.R3];
      var question =  {
          id: line.ID,
          text: line.DESCRIPCION,
          answers: answers,
          correct_answer: line.RESP_OK,
          image: line.IMAGEN,
          category: category
        };
        questions.push(question);
      }
  console.log(nuevoJson)
    })
}

module.exports = convertCsvToJson;