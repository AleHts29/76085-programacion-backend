const dividirConPromises = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`Recibiendo parametros para avidivir: ${dividendo} y ${divisor}`);

        // Simular un tiempo de espera de 2 segundos (2000 milisegundos)
        setTimeout(() => {

            if (divisor === 0) {
                reject("No se puede dividir por cero.");
            } else {
                resolve(dividendo / divisor);
            }

        }, 2000); // Cambia este valor según el tiempo de espera deseado
    })
}


const dividirConPromises_02 = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        console.log(`Recibiendo parametros para avidivir: ${dividendo} y ${divisor}`);

        if (divisor === 0) {
            // Error: Division por cero - rechazo la promesa
            reject("No se puede dividir por cero");
        } else {
            // resuelvo la promesa con el resultado
            resolve(dividendo / divisor);
        }
    })
}


// usando async/await
const funcionAsincronica = async (a, b) => {
    try {

        // uso await para esperar a que la promesa se resuelva
        let resultado = await dividirConPromises(a, b); // tarda 2 segundos

        let resultado2 = await dividirConPromises_02(a, resultado);

        console.log(resultado2);
        return resultado2;
    } catch (error) {
        console.log("Error: ", error);
    }
}


const funcionAsincronica_02 = async (a, b) => {
    try {
        let result = await funcionAsincronica(5, 2);
        console.log(result + 1);
    } catch (error) {
        console.log("Error: ", error);
    }
}


funcionAsincronica_02(5, 0);