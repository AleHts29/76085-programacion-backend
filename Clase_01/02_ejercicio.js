// ¿Cómo lo hacemos? Definiremos la función “mostrarLista”, la cual recibirá un arreglo con elementos como parámetro.

// Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
// Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
// Invocar la función con los casos de prueba.


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mostrarLista(array) {

    for (const element of array) {
        console.log(element);
    }

    if (array.length === 0) {
        console.log("Lista vacia");
    }

    return `Tamanio de lista: ${array.length}`;

}


// prueba lista vacia
let resultado1 = mostrarLista([])
console.log(resultado1);

// prueba con datos en lista
let resultado2 = mostrarLista(array)
console.log(resultado2);





/*=============================================
=                   Spread                   =
=============================================*/

const miArray = [1, 2, 3, 4, 5, 6];

function mostrarListaSpread(...array) {
    for (const element of array) {
        console.log(element);
    }

    if (array.length === 0) {
        console.log("¡Lista vacía!");
    }

    return `Tamaño de la lista: ${array.length}`;
}

console.log(mostrarListaSpread(...miArray));

/*
La diferencia principal entre las dos funciones radica en cómo se pasan los argumentos:

En la primera función, se pasa un único argumento que es un array (array).
En la segunda función, se utiliza el operador spread (...array) para pasar los elementos del array como argumentos individuales.
Por lo tanto, en la primera función, el parámetro array dentro de la función es tratado como un array, mientras que en la segunda función, los elementos del array son tratados como argumentos individuales dentro de la función.

La segunda función con el operador spread permite mayor flexibilidad, ya que puede manejar una cantidad variable de elementos sin necesidad de que estén encapsulados en un array. Esto puede ser útil en situaciones donde se necesita trabajar con los elementos por separado en lugar de como un conjunto.
*/