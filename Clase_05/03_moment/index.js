// Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual. Posteriormente leer el archivo y mostrar el contenido por consola. 
// Utilizar el módulo fs y sus operaciones de tipo callback.


const fs = require('fs');
const moment = require('moment');

// Obtener la fecha y hora actual usando moment
const fyh = moment().format('YYYY-MM-DD HH:mm:ss');
const contenido = `Fecha y Hora actual:: ${fyh}`
console.log(contenido);



// Nombre del archivo
const fileName = 'fecha_y_hora.txt';


fs.writeFile(fileName, contenido, (err) => {
    if (err) {
        return console.log(`Error al escribir en el archivo: ${err}`)
    }

    // leer del archivo
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            return console.log(`Error al leer el archivo: ${err}`)
        }
        console.log(`Contenido del archivo: ${data}`);
    })
})
