import express from 'express';
import usersRoutes from './routes/users.routes.js'
import petsRoutes from './routes/pets.routes.js'

import __dirname from './utils.js';

const app = express();


// Middlewares de configuracion
app.use(express.json());
app.use(express.urlencoded({ extended: true }))



// console.log(__dirname);

// Le indicamos al server que el direectorio public es publico
app.use(express.static(__dirname + '/public'));



const PORT = 9099


app.use(function (req, res, next) {
    console.log("Mi primer Middleware a ni nivel de APP");
    console.log("Time: " + Date().toLocaleString());

    // para salir del Md
    next()
})



// enpoint de telemetria
app.get('/ping', (req, res) => {
    res.send('pong');
})



// Routes
app.use("/api/user", usersRoutes)
app.use("/api/pet", petsRoutes)


app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
})
