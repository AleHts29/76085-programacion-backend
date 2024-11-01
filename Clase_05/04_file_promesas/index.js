const fs = require('fs').promises // 👈 lib Nativa de NODEJS
const moment = require('moment') // 👈 lib no es Nativa de NODEJS



// Data 
const data = {
    nombre: "Juan Perez",
    edad: 30,
    ciudad: "Buenos Aires",
    fecha: moment().format('YYYY-MM-DD HH:mm:ss')
}

const nombreFile = 'datos.json'

const escribirArchivoJSON = async (fileName, data) => {
    try {
        // Conversion a texto plano
        const jsonData = JSON.stringify(data, null, 2)
        // timer 5s
        // Escribir el archivo
        await fs.writeFile(fileName, jsonData)

        console.log(`Archivo ${fileName} escrito con éxito`);

    } catch (error) {
        console.error(`Error al escribir el archivo: ${error}`);
    }
}


const leerArchivoJSON = async (fileName) => {
    try {
        const data = await fs.readFile(fileName)

        // Conversion a objeto JSON
        const jsonData = JSON.parse(data);

        console.log(`Archivo ${fileName} leído con éxito`);

        // timer 3s
        return jsonData
    } catch (error) {
        console.error(`Error al leer el archivo: ${error}`);
    }
}


const main = async (fileName, data) => {
    // escribirArchivoJSON
    await escribirArchivoJSON(fileName, data) // 5m

    // leerArchivoJSON
    const result = await leerArchivoJSON(fileName) // 2m

    console.log(result.nombre);
}


main(nombreFile, data) // 8s


console.log("HOla");
