// Promesas
const dividirConPromises = (dividendo, divisor) => {
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

console.log("Dividiendo usando Promesas, Resultado:");
// console.log(dividirConPromises(2, 5));
// console.log(dividirConPromises(2, 0));


// implementación con then y catch
dividirConPromises(2, 0)
    .then(restulado => console.log(`Resultado: ${restulado}`))
    .catch(error => console.error(`Error: ${error}`));

