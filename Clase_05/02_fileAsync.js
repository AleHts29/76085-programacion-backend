
/**
 * Fs Asincrono:
 * 
- writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
- readFile = Para obtener el contenido de un archivo. Como pide información, su callback es de la forma: (error, resultado)=>
- appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
- unlink = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
*/

const fs = require('fs');

const dirNameAsync = "./files_02"
const fileNameAsync = dirNameAsync + "/ejemplo_callbacks.txt"

let data = "Hola Coders, estoy en un archivo! - utilizando callbacks"

fs.mkdir(dirNameAsync, { recursive: true }, (error) => {
    if (error) throw Error("Error creating directory")

    // Escritura
    fs.writeFile(fileNameAsync, data, (error) => {
        if (error) throw Error("Error no se pudo escribir en el archivo")
    })



    // Callback anidados
    fs.readFile(fileNameAsync, 'utf8', (error, contenido) => {
        if (error) throw Error("Error no se pudo leer el archivo")
        //Montramos conteniudo
        console.log(contenido);

        fs.appendFile(fileNameAsync, " - Otro contenido...", (error) => {
            if (error) throw Error("Error no se pudo agregar contenido al archivo")

            // volvemos a leer el archivo
            fs.readFile(fileNameAsync, 'utf8', (error, contenido) => {
                if (error) throw Error("Error no se pudo leer el archivo")

                //Montramos conteniudo
                console.log(contenido);

                // eliminacion
                fs.unlink(fileNameAsync, (error) => {
                    if (error) throw Error("Error No se pudo borrar archivo.");
                });
            })
        })
    })
})