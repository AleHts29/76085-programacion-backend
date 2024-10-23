//ES9
//Spread and Rest Operator 
//Tomemos un objeto de ejemplo:
const persona = {
    nombre: 'John Doe',
    apellido: 'Smith',
    edad: 30,
    pais: 'ARG',
    hobbies: ['reading', 'coding', 'hiking']
};


//Y usemos un array de ejemplo:
const arrayPersonas = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

// Copia de arrays
const copiaArray = [arrayPersonas];
// console.log('Copia de array:', copiaArray);

// usando spread operator para copiar un array
const copiaArraySpread = [...arrayPersonas];
// console.log('Copia de array con spread operator:', copiaArraySpread);




// _02
// Objects Destructuring 
// Usando el objeto persona como ejemplo:
const printNameStandard = (personaParam) => {
    console.log(personaParam.nombre); // ?? como obtengo un parametro del objeto?
}

// printNameStandard(persona)

// desetructuramos en el parametro de la función
const printNameDestructured = ({ edad }) => {
    console.log(edad);
}

printNameDestructured(persona)


// 
const { nombre, apellido } = persona;
console.log(nombre, apellido); // imprime 'John Doe' y 'Smith'