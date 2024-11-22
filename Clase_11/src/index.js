import express from 'express';
import handlebars from 'express-handlebars'
import viewRoutes from './routes/views.routes.js'
import __dirname from './utils.js';

import { Server } from 'socket.io'

const app = express();
const PORT = process.env.PORT || 9090


// Middlewares de configuracion
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Configuraciones HBs
app.engine("handlebars", handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

// Le indicamos al server que el direectorio public es publico
app.use(express.static(__dirname + '/public'));



// enpoint de telemetria
app.get('/ping', (req, res) => {
    res.render('index', {});
})

// Routes
app.use('/', viewRoutes)


const httpServer = app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
})


//  instaciamos socket.io
const socketServer = new Server(httpServer)

// Creamos un canal de comunicación hacia el Cliente
const messages = []
socketServer.on('connection', socket => {
    // TODO LO QUE SEA SOCKECT, VA AQUI!!!






    // 2da Parte
    socket.on("message", data => {
        console.log("Recibido: ", data);
        messages.push(data)

        // enviamos un array de objetos ---> [{ user: "Juan", message: "Hola" }, { user: "Elias", message: "Como estas?" }]
        socketServer.emit('messageLogs', messages)
    })


    // hacemos un broadcast del nuevo usuario que se conecta al chat
    socket.on('userConnected', data => {
        socket.broadcast.emit("userConnected", data.user)
    })



})
