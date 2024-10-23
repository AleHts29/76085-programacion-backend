//ES8
//Uso de Object.entries, Object.values, Object.keys 
//para un mejor control interno sobre las propiedades de un objeto.

const impuestos = {
    impuesto1: 10,
    impuesto2: 5,
    impuesto3: 8,
    impuesto4: 15
}


// entries() devuelve un array de arrays, donde cada sub-array contiene un par clave-valor
let parLLaveValor = Object.entries(impuestos);
console.log(parLLaveValor);

// values() devuelve un array con los valores de las propiedades del objeto
let valores = Object.values(impuestos); // [ 10, 5, 8, 15 ]
console.log(valores);

// Keys() devuelve un array con las claves de las propiedades del objeto
let claves = Object.keys(impuestos);
console.log(claves);


// Calcular el total de impuestos en valores
let impuestosTotales = valores.reduce((valorAcumulado, valorActual) => {
    console.log(`Valores: valorInicial: ${valorActual} y valorAcumulado: ${valorAcumulado}`);

    return valorAcumulado + valorActual
});

console.log(`Total de impuestos: ${impuestosTotales}`);