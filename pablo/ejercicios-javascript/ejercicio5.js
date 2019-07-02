const arg = require('yargs').argv

var hoy = new Date();
var cumple = new Date(arg.fecha);
var años = hoy.getFullYear() - cumple.getFullYear();

if (hoy.getMonth() < cumple.getMonth()) {
  años -= 1;
}

console.log("Tienes " + años)
