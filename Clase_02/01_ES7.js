const array = [1, 2, 3, 4, 5];
//             0, 1, 2, 3, 4


//ES7
let exponencial = array.map((base, index) => base ** index);
/** 
 * Toma un arreglo de valores base y con ayuda del operador map(), utiliza el operador exponencial para
 * elevar el valor base por su indice así: (1**0, 2**1, 3**2, 4**3, 5**4) 
*/


//Uso de exponencial ** como remplazo de la funcion pow de la librería Math (Math.pow(base, exp)))

console.log(exponencial);



// Ejm 2: include
let nombre = ['Juan', 'Pedro Pascal', 'Maria'];
const nombreBuscado = 'Pedro Pascal';
const nombreBuscadoStr = 'Pedro Pascal';


if (nombreBuscadoStr.includes("Pedro")) {
    console.log('El nombre se encuentra en el arreglo');
} else {
    console.log('El nombre no se encuentra en el arreglo');
}