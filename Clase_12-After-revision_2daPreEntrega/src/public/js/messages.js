const socket = io();

let user;
const chatBox = document.getElementById('chatBox')


/*=============================================
=                SweetAlert                   =
=============================================*/
Swal.fire({
    icon: "info",
    title: "Identificate, por favor",
    input: "text",
    text: "Ingrese userName para identificarse en el Chat!!",
    color: "#716add",
    inputValidator: (value) => {
        if (!value) {
            return "Necesitas ingresar tu username para continuar!"
        } else {
            // Capturamos el user para hacer broadcast del nuevo usuario que se conecta al chat
            socket.emit('userConnected', { user: value })
        }
    },
    allowOutsideClick: false
}).then(result => {
    user = result.value;

    // Cargamos Nombre en la plantilla Hbs
    const myName = document.getElementById("myName")
    myName.innerHTML = user;
})


//Guardar mensajes por usuario y mostrarlo en nuesto log de mensajes.
chatBox.addEventListener('keyup', evt => {
    if (evt.key === "Enter") {
        if (chatBox.value.trim().length > 0) {
            socket.emit('message', { user: user, message: chatBox.value })
            chatBox.value = '';
        } else {
            Swal.fire({
                icon: "warning",
                title: "Alert",
                text: "Por favor ingrese mensaje"
            })
        }
    }
})



// Escuchamos a todos los usuarios que estan conectados
// recivimos un array de objetos ---> [{ user: "Juan", message: "Hola" }, { user: "Elias", message: "Como estas?" }]
socket.on('messageLogs', data => {
    const messageLogs = document.getElementById('messageLogs')
    let logs = ''

    // Iteracion de []data
    data.forEach(log => {
        logs += `<b>${log.user}</b> dice: ${log.message}<br/>`
    });

    messageLogs.innerHTML = logs
})


// 2da - parte
// Aqui escuchamos los nuevos usuarios que se conectan al chat
socket.on('userConnected', data => {
    let message = `Nuevo usuario  conectado ${data}`
    Swal.fire({
        position: "top-end",
        title: "Nuevo usuario entra al chat!!",
        text: message,
        toast: true,
        color: '#716add',
        showConfirmButton: false,
        timer: 1500
    });
})


/*=============================================
=                   Extras                   =
=============================================*/

const closeChatBox = document.getElementById('closeChatBox')
closeChatBox.addEventListener('click', evt => {
    alert("Gracias por usar este chat, Adios!!")

    socket.emit('closeChat', { close: 'close' })

    messageLogs.innerHTML = '';
})




/*=============================================
=   After revision de 2da preEntrega          =
=============================================*/

// const producto = {
//     nombre: "Producto Ejemplo",
//     descripcion: "Descripción del producto",
//     precio: 29.99,
//     categoria: "Categoría Ejemplo",
//     stock: 100
// };

// fetch('/api/products', {
//     method: 'POST', // Método para crear un nuevo recurso
//     headers: {
//         'Content-Type': 'application/json' // Especifica que se envía un JSON
//     },
//     body: JSON.stringify(producto) // Convierte el objeto a una cadena JSON
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Error en la creación del producto');
//         }
//         return response.json(); // Parsear la respuesta a JSON
//     })
//     .then(data => {
//         console.log('Producto creado exitosamente:', data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });



// Ejemplo de un registro desde un formulario

/*
esto va en un plantiolla .hbs pero es de un registro de usuario

<div>
    <h1>Registro</h1>
    <form id="registerForm">

        <label>Nombre</label>
        <input name="first_name">
        <br/>
        <label>Apellido</label>
        <input name="last_name">
        <br/>
        <label>Email</label>
        <input name="email">
        <br/>
        <label>Edad</label>
        <input name="age">
        <br/>
        <label>Contraseña</label>
        <input name="password">

        <input type="submit">
    </form>
    <p>¿Ya tienes una cuenta? <a href="/users/login">Ingresa aquí</a></p>
</div>
<script src="/js/register.js"></script>

*/


// const form = document.getElementById('registerForm');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     const data = new FormData(form);
//     console.log(data);
//     const obj = {};
//     data.forEach((value, key) => obj[key] = value);
//     console.log("Objeto formado:");
//     console.log(obj);
//     fetch('/api/sessions/register', {
//         method: 'POST',
//         body: JSON.stringify(obj),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(result => {
//         if (result.status === 201) {
//             result.json();

//             // Se poidria unsar el socket desde este punto
//             // socket.emit()


//             alert("Usuario creado con exito!");
//             window.location.replace('/users/login');
//             socket.emit('palabra-clave', result)
//         } else {
//             alert("No se pudo crear el usuario!");
//         }
//     }).then(
//         json => console.log(json));
// })
