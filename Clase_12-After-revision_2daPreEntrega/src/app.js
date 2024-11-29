import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import { Server } from 'socket.io';
import viewRouter from './routes/views.router.js'

const app = express();
const PORT = process.env.PORT || 9090;

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Confi de HBs
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + "/views");
app.set("view engine", "handlebars");


app.use(express.static(__dirname + "/public"))



app.get('/ping', (req, res) => {
    res.render("index")
})

// Declaramos el router
app.use('/', viewRouter)



const httpServer = app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})


// Abrimos el canal de comunicacion del lado del server

const socketServer = new Server(httpServer)



const messages = [];
socketServer.on('connection', socket => {
    // Esto lo ve cualquier user que se conecte
    socketServer.emit('messageLogs', messages)


    socket.on("message", data => {
        // messages.push(data)


        socketServer.emit('messageLogs', messages)
    })


    // hacemos un broadcast del nuevo usuario que se conecta al chat
    socket.on('userConnected', data => {
        console.log(data);
        socket.broadcast.emit('userConnected', data.user)
    })

    socket.on('closeChat', data => {
        if (data.close === "close") {
            socket.disconnect()
        }
    })

})
