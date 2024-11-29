// Configuracion del socket del lado del cliente
const socket = io()

socket.emit('mensaje', "Hola soy el cliente!!")

// Escuchamos al server
socket.on("msg_02", data => {
    console.log(data);
})


// Escuchando msg broadcast
socket.on("broadcast", data => {
    console.log(data);
})


socket.on("msg_todos", data => {
    console.log(data);
})