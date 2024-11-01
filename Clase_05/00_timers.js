// _01 Temporizador
const temporizador = (callback) => {
    console.log("_01 Temporizador - temporizador");
    setTimeout(() => {
        callback()
    }, 3000)
}

// _02 Contador
let contador = () => {
    console.log("_02 Contador - setInterval");
    let contador = 1

    let timer = setInterval(() => {
        console.log(contador)
        contador++;
        if (contador > 5) {
            console.log("Conteo terminado...");
            clearInterval(timer);
        }
    }, 2000)
}



// ejecuciones::
let callBack = () => console.log("Realizando Operacion con setInterval");
temporizador(callBack)

contador()