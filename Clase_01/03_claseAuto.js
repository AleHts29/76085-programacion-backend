class Auto {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }


    // Metodos
    frenar() {
        return 'se frena el auto'
    }

    acelerar() {
        return `se acelera el auto de color: ${this.color}`
    }
}


// Instancias
const auto1 = new Auto("Ford", "Focus", "Azul")
console.log(auto1);
console.log(auto1.acelerar());


const auto2 = new Auto("Poeugeot", "306", "Negro")
console.log(auto2);
console.log(auto2.acelerar());

