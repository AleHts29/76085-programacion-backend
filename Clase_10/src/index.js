import express from 'express';
import handlebars from 'express-handlebars'
import viewRoutes from './routes/views.routes.js'
import __dirname from './utils.js';

import { Server } from 'socket.io'

const app = express();
const PORT = 9090


// Middlewares de configuracion
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Configuraciones HBs
app.engine("handlebars", handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')


// console.log(__dirname);

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

const logs = []
socketServer.on('connection', sockect => {
    // TODO LO QUE SEA SOCKECT, VA AQUI!!!


    // sockect.on("mensaje", data => {
    //     console.log("Recibido: ", data);
    // })

    // sockect.emit("msg_02", "Hola soy el server");


    sockect.broadcast.emit("broadcast", "Este evento es para todos los sockets, menos el socket desde que se emitió el mensaje!")


    socketServer.emit("evento_para_todos", "Evento para todos los Sockets!")



    // 2da Parte
    sockect.on("mensaje", data => {
        console.log("Recibido: ", data);
        logs.push({ socketId: sockect.id, message: data })

        // enviamos al cliente los logs
        socketServer.emit('logs', { logs })
    })




})
