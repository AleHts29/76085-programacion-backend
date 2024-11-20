const socket = io()

socket.emit("mensaje", "Hola soy el cliente")

socket.on("msg_02", data => {
    console.log("Recibido: ", data);
})



socket.on("broadcast", data => {
    console.log("Broadcast: ", data);
})


socket.on("evento_para_todos", data => {
    console.log("evento_para_todos: ", data)
})