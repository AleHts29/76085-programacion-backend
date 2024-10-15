// JavaScript me permite la mutabilidad de las variables
// let name = 'John Doe'; // esto es un string
// console.log(typeof name);


// name = 12 // es un numero
// console.log(typeof name);

// console.log(name);



// Objetos
const obj = { name: 'John', last_name: "Cisco" }
console.log(typeof obj);
obj.email = 'John@cisco.com'
console.log(obj);

obj.name = 'Jones'
console.log(obj);



// Array
const arr = [1, 2, 'John', { name: 'Doe' }]
console.log(typeof arr);



arr[2] = 3


arr[3].last_name = 'Cisco'

console.log(arr);



