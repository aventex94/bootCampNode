const today = require('dates-of-today');
var fecha = today();
module.exports=function logger() {
    var cadena;
    process.argv.forEach(function (val, index, array) {
         cadena = array[2];
        
    });
    var cadena1 = cadena.slice(6,cadena.length);
    console.log(cadena1 + " " + fecha.date);
    
}

