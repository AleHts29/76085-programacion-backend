class Persona {
    // Variable estatica
    static contadorPersonas = 0

    // constructor
    constructor(nombre) {
        this.nombre = nombre;
        Persona.contadorPersonas++; // Incrementa la variable estática cada vez que se crea una instancia
    }

    // Metodos
    mostrarNombre() {
        console.log(`Mi nombre es: ${this.nombre}`);
    }


    // Metodo estatico
    static mostrarContador() {
        console.log(`Se han creado ${Persona.contadorPersonas} personas.`);
    }
}

// Crear dos instancias de la clase Persona
const persona1 = new Persona('Alejandro');
const persona2 = new Persona('Alejandro');
const persona3 = new Persona('Juan');
const persona4 = new Persona('Kevin');

// Mostrar nombre de cada instancia
persona1.mostrarNombre();
persona2.mostrarNombre();

// comparo la individualidad de la clases
console.log(persona1 === persona2); // falso


// Metodo statico 
Persona.mostrarContador(); // Se han creado 2 personas.


