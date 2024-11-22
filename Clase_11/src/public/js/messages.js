const socket = io();

const chatBox = document.getElementById('chatBox');
let user;

/* =====================================
=              SweetAlert              =
===================================== */
Swal.fire({
    icon: "info",
    title: 'Identicate, por favor',
    input: 'text',
    text: 'Ingrese el username para identificarse en el chat.',
    color: "#716add",
    inputValidator: (value) => {
        if (!value) {
            return 'Debes ingresar un username.'
        } else {
            // 2da parte
            socket.emit('userConnected', { user: value })
        }
    },
    allowOutsideClick: false
}).then(result => {
    user = result.value


    // Cargamos el valor a la plantilla
    document.getElementById('myName').innerText = user
})






/* =====================================
=              Socket.io              =
===================================== */
chatBox.addEventListener('keyup', evt => {
    if (evt.key === 'Enter') {
        if (chatBox.value.trim().length > 0) {
            socket.emit('message', { user: user, message: chatBox.value })
            // Limpiamos el input
            chatBox.value = "";
        } else {
            Swal.fire({
                icon: "warning",
                title: "Alerta",
                text: "Por favor ingresar un mensaje!!"
            })
        }
    }
})

// recivimos un array de objetos ---> [{ user: "Juan", message: "Hola" }, { user: "Elias", message: "Como estas?" }]
socket.on("messageLogs", data => {
    const messageLogs = document.getElementById('messageLogs')
    let logs = ''

    data.forEach(log => {
        logs += `<strong>${log.user}:</strong> ${log.message}<br/>`
    })

    messageLogs.innerHTML = logs;
})



// 2da - parte
// Aqui escuchamos los nuevos usuarios que se conectan al chat
socket.on("userConnected", user => {
    let message = `Nuevo usuario conectado: ${user}`
    Swal.fire({
        icon: "info",
        title: 'Nuevo usuario entra al chat!!',
        text: message,
        toast: true,
        position: "top-end",
    })
})



/*=============================================
=                   Extras                   =
=============================================*/
const closeChatBox = document.getElementById('closeChatBox')
closeChatBox.addEventListener('click', evt => {
    socket.disconnect()
})