class TicketManager {
    // Variable privada precioBaseDeGanancia
    #precioBaseDeGanancia = 0.15;

    // constructor
    constructor() {
        this.eventos = [];
        this.idCounter = 1; // Para manejar el id autoincrementable
    }


    // Metodos
    getEventos() {
        return this.eventos;
    }


    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        const nuevoEvento = {
            id: this.idCounter++, // Asigna un id autoincrementable
            nombre,
            lugar,
            precio: precio + (precio * this.#precioBaseDeGanancia), // Agrega un 15% al precio original
            capacidad,
            fecha,
            participantes: [] // Inicia con un arreglo vacío de participantes
        }

        this.eventos.push(nuevoEvento);
        return nuevoEvento;
    }


    // Método para agregar un usuario a un evento
    agregarUsuario(idEvento, idUsuario) {
        const evento = this.eventos.find(e => e.id === idEvento);

        if (!evento) {
            return `Error: El evento con id ${idEvento} no existe.`;
        }

        if (evento.participantes.includes(idUsuario)) {
            return `Error: El usuario con id ${idUsuario} ya está registrado en este evento.`;
        }

        evento.participantes.push(idUsuario);
        return `Usuario con id ${idUsuario} añadido al evento con id ${idEvento}.`;
    }


    // Método para eliminar un evento
    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        const eventoExistente = this.eventos.find(e => e.id === idEvento);

        if (!eventoExistente) {
            return `Error: El evento con id ${idEvento} no existe.`;
        }

        const nuevoEvento = {
            ...eventoExistente, // Copia las propiedades del evento existente
            id: this.idCounter++, // Nuevo id
            lugar: nuevaLocalidad, // Nueva localidad
            fecha: nuevaFecha, // Nueva fecha
            participantes: [] // Arreglo de participantes vacío
        };

        this.eventos.push(nuevoEvento);
        return nuevoEvento; // Retorna el nuevo evento creado
    }

}


// Ejemplo de uso
const manager = new TicketManager();

// Agregar eventos
manager.agregarEvento('Concierto de Rock', 'Buenos Aires', 100);
manager.agregarEvento('Conferencia Tech', 'Cordoba', 50);


// Ver eventos
console.log(manager.getEventos());

// Agregar un usuario a un evento
console.log(manager.agregarUsuario(1, 101));
console.log(manager.agregarUsuario(1, 102));

// Poner evento en gira
console.log(manager.ponerEventoEnGira(1, 'Mendoza', new Date('2024-12-01')));


// Ver eventos
console.log(manager.getEventos());

