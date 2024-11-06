const http = require('http');

const PORT = 3000;


const server = http.createServer((req, res) => {

    res.end('Mi primer hola mundo desde el server con NODEJS!!')
})


server.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})

