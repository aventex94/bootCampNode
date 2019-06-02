function parameters() {
    var cadena;
    process.argv.forEach(function (val, index, array) {
        cadena = array[2];

    });
    return cadena.slice(6, cadena.length);
}


const today = require('dates-of-today');
const fs = require('fs');
var fecha = today();
var jsonObject = new Object();
jsonObject.sessionId = '11';
jsonObject.text = parameters();
var jsonFile;
/*module.exports = function logger(){ 
    fs.readFile('log.json',(err, data) => {
        if (err){
            jsonFile=[];
        }
        else{
            jsonFile= JSON.parse(data);
        }
        jsonFile.push(jsonObject);
        fs.writeFile('log.json', JSON.stringify(jsonFile,null,2),(err) => {
            if (err) console.log("error");
            console.log('Saved');
        });
    });
}*/
module.exports = new Promise((resolve, reject) => {
    fs.readFile('log.json', (err, data) => {
        if (err) {
            reject();
        } else {
            resolve(data);
        }

    })
}).then((data) => {
    jsonFile = JSON.parse(data);
}).catch(() => {
    jsonFile = [];
}).finally(() => {
    jsonFile.push(jsonObject);
    new Promise((resolve, reject) => {
        fs.writeFile('log.json', JSON.stringify(jsonFile, null, 2), (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    }).catch((err) => {
        throw err;
    }).then(() => {
        console.log("Saved")
    })
})


