// 01
let cadena = "  Hola, mundo!   ";
console.log(cadena.trim()); // "Hola, mundo!"


// array.flat()
let array2D = [[1, 2], [3, 4], [5, 6, [12, 13, 14], 7]];
console.log(array2D.flat());


// Función asíncrona que utiliza dynamic import
// async function importFunction() {
//     const { default: module } = await import('./module.js');
//     console.log(module.helloWorld);
// }

// importFunction();



// nullist ES11
let nullist = undefined;
console.log(nullist ?? "El valor es undefined"); // "El valor es nulo"