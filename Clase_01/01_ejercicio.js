
let i = 0;

function foo() {
    i = 1;
    let j = 2;


    if (true) {
        console.log(i); // 1
        console.log(j); // 2

        let k = 3;
        console.log(k); // 3
    }

    console.log(i); // 1
    console.log(j); // 2
    console.log(k); // ?, nos da error: ReferenceError: k is not defined
}

// foo()


const testScope = function () {
    let i = 0;

    // creamos un bloque
    if (true) {
        const variable = 12
        console.log(variable); // 12

        let i = 5
        console.log(i); // 5
    }


    // console.log(variable); // ?, nos da error: ReferenceError: variable is not defined
    console.log(i);// 0
}


// testScope()


/* =====================================
=              Constantes              =
===================================== */
// const name = "Fran"
// name = "John"

// console.log(name);

let obj1 = {
    name: "John",
    edad: 25
}
// console.log("obj1", obj1);


// // const obj2 = obj1
// const obj2 = { ...obj1 }// genera una copia y ya no apunta a la posicion de mem de obj1
// console.log("obj2", obj2);

// obj2.name = "Alex"
// obj2.pais = "Arg"

// console.log("obj1", obj1); //? obj1
// console.log("obj2", obj2);//? 


// obj1 = "HOLA"
// // obj2 = 12

// // console.log("obj1", obj1); // "HOLA"
// // console.log("obj2", obj2);//? "Error"






/*=============================================
=                   Funtions                 =
=============================================*/
const suma = (pepito, pablito) => {
    let result
    result = pepito - pablito; // 3 - 5
    return result
}


// refactor
const suma2 = (a, b) => a + b;

console.log(suma(3, 5)); // 8



// Usando template strings
console.log(`El resultado de la suma es: ${suma2(3, 5)}`); // 8


/*
card: 1
descripcion: ${}
precio: ${}
stock: ${}
*/


