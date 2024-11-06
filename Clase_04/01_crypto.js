const crypto = require('crypto');

class UserManager {
    static usuarios = []

    // Método para hashear la contraseña
    hashPassword(password) {
        return crypto.createHash('sha256').update(password).digest('hex');
    }

    // Método para crear un nuevo usuario - crearUsuario
    static crearUsuario({ nombre, apellido, nombreUsuario, contraseña }) {
        //Logica
        const hashedPassword = this.hashPassword(contraseña)
        const nuevoUsuario = {
            nombre,
            apellido,
            nombreUsuario,
            contraseña: hashedPassword
        };

        this.usuarios.push(nuevoUsuario);
        console.log(`Usuario ${nombreUsuario} creado exitosamente.`);

    }


    // Método para mostrar todos los usuarios
    static mostrarUsuarios() {
        console.log("Usuarios almacenados:", this.usuarios);
    }



    // Método para validar el login del usuario
    static validarUsuario(nombreUsuario, contraseña) {
        const usuario = this.usuarios.find(u => u.nombreUsuario === nombreUsuario);

        if (!usuario) {
            console.log("Error: Usuario no encontrado.");
            return;
        }

        const hashedContraseña = this.hashPassword(contraseña);

        // comparamos los usuarios y su contraseña
        if (usuario.contraseña === hashedContraseña) {
            console.log(`usuario legueado`);
        } else {
            console.log("Error: datos no validos.");
        }
    }
}


// Ejemplo de uso:
UserManager.crearUsuario({
    nombre: "Luis",
    apellido: "Munar",
    nombreUsuario: "lmunar",
    contraseña: "password123"
})

UserManager.crearUsuario({
    nombre: "Ana",
    apellido: "Perez",
    nombreUsuario: "aperez",
    contraseña: "mySecretPassword"
});


// Mostrar usuarios
UserManager.mostrarUsuarios();

// Validar usuario (correcto)
UserManager.validarUsuario("lmunar", "password123");

// Validar usuario (contraseña incorrecta)
UserManager.validarUsuario("lmunar", "wrongPassword");

// Validar usuario (usuario no existente)
UserManager.validarUsuario("nonexistent", "password123");