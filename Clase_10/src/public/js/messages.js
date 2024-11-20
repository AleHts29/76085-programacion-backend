const socket = io();

const input = document.getElementById('textoEntrada');
const log = document.getElementById('log');



input.addEventListener('keyup', evt => {
    if (evt.key === 'Enter') {
        socket.emit('mensaje', input.value);
        input.value = '';
    }
})


socket.on("logs", data => {
    let logs = ''
    data.logs.forEach(log => {
        logs += `${log.socketId} dice: ${log.message}<br/>`
    })


    log.innerHTML = logs;

})