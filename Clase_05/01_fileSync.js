/**
 * Manejo de archivos usando NodeJs
 * Implementación usando nodejs:fs
 */

/**
 * Fs Sincrono:
 * 
    - writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
    - readFileSync = Para obtener el contenido de un archivo.
    - appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
    - unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
    - existsSync = Corrobora que un archivo exista!
*/


const fs = require('fs');

const dirName = "./files"
const fileName = dirName + "/ejemplo.txt"

console.log("Generando escritura de archivos Sync con fileName: " + dirName);

if (!fs.existsSync(dirName)) fs.mkdirSync(dirName)

fs.writeFileSync(fileName, "Hola coders!!!")



if (fs.existsSync(fileName)) {
    // Leemos el contenido del archivo
    let contenido = fs.readFileSync(fileName, "utf8")
    console.log("contenido del archivo:: ", contenido);


    // Aggregamos mas contenido
    fs.appendFileSync(fileName, " \nEstoy agregando nuevo contenido al archivo..")



    // Borrar
    fs.unlinkSync(fileName)


}


