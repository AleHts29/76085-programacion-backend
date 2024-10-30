/*
Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. Indicar por consola la finalización de esta operación con un mensaje.

Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

Nota: Considerar que esta operación debe realizarse de forma asíncrona.

*/
// 01_ Necesito  math.random ---> Generar nummero ala
// 02_ for  para generar 10000 iteraciones
/* usar Promesas
salida esperada::
        let obj = {
            '13': 1,
            "12":1,
            "18":2
        }

        obj[1] = ++ 
*/

const generarNumerosRandom = () => {
    return new Promise((resolve, reject) => {
        try {
            const numeros = []
            for (let i = 0; i < 10000; i++) {
                numeros.push(Math.floor(Math.random() * 20) + 1)
            }
            resolve(numeros)
        } catch (error) {
            reject(error)
        }
    })
}

const contarFrecuencias = (array) => {
    return new Promise((resolve, reject) => {
        try {
            const frecuencias = {}
            array.forEach(numero => {
                if (!frecuencias[numero]) {
                    frecuencias[numero] = 1
                } else {
                    frecuencias[numero]++
                }
            })
            resolve(frecuencias)
        } catch (error) {
            reject(error)
        }
    })
}



// funcion principal
const main = async () => {
    try {
        // generarNumerosRandom
        const numeros = await generarNumerosRandom()
        console.log(numeros);

        console.log("Generación de numeros aleatorios completada");

        // contarFrecuencias
        const frecuencias = await contarFrecuencias(numeros)
        console.log("frecuencias de los numeros: ", frecuencias);

    } catch (error) {
        console.log("Error: " + error);

    }
}


main();