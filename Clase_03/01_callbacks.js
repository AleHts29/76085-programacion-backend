//Usemos un arreglo de prueba:
let valoresOriginales = [1, 2, 3, 4, 5];


let nuevosValores = valoresOriginales.map(x => x * 2);
// console.log(nuevosValores); // [2, 4, 6, 8, 10]


// que pasa si declaramos el callback por fuera de la función map?
const mapCallback = (valor) => {
    if (valor % 2 === 0) {
        return 'numero par';
    } {
        return 'numero impar';
    }
}

let nuevosValores_02 = valoresOriginales.map(mapCallback);
// console.log(nuevosValores_02); // ['numero impar', 'numero par', 'numero impar', 'numero par', 'numero impar']



//Recrear un callback de funcion map:
//Usemos un arreglo de prueba:
let arregloDePrueba = [1, 2, 3, 4, 5];
const callbackTest = x => x * 2;



console.log('.map Original');
console.log(arregloDePrueba.map(callbackTest));// [2, 4, 6, 8, 10]

// declaramos la función map propia:
const mifuncionMap = (arreglo, callback) => {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        let nuevoValor = callback(arreglo[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}

let nuevoArregloPropio = mifuncionMap(arregloDePrueba, callbackTest)
console.log('mifuncionMap');
console.log(nuevoArregloPropio);



//Extra: Podemos agregar nuestra funcion al arreglo como tal, usando el prototype del objeto Array:
Array.prototype.c76085_map = function (callback) {
    let nuevoArreglo = [];
    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i]);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}
const resultados = arregloDePrueba.c76085_map(callbackTest)
console.log('c76085_map');
console.log(resultados);





// 2da parte
// /**

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;


const realizarOperacion = (num1, num2, callback) => {
    console.log(`Voy a realizar una operacion, puede ser: ${callback}`);
    let result = callback(num1, num2)
    console.log(`El resultado es: ${result}`);
}

//test de pruebas
realizarOperacion(5, 3, suma); // imprime: Voy a realizar una operacion, puede ser: suma, El resultado es: 8
realizarOperacion(5, 3, resta); // imprime: Voy a realizar una operacion, puede ser: resta, El resultado es: 2
realizarOperacion(5, 3, multiplicacion); // imprime: Voy a realizar una operacion, puede ser: multiplicacion, El resultado es: 15
realizarOperacion(5, 2, division); // imprime: Voy a realizar una operacion, puede ser: division, El resultado es: 2.5