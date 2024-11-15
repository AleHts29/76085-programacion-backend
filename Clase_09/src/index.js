import express from 'express';
import handlebars from 'express-handlebars'
import usersRoutes from './routes/users.routes.js'
import petsRoutes from './routes/pets.routes.js'
import viewRoutes from './routes/views.routes.js'



import __dirname from './utils.js';

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



// Ruta de prueba para Hbs
app.get('/test-hbs', (req, res) => {
    const userTest = {
        name: "Francisco",
        last_name: "reta",
        age: 36
    }
    res.render("hello", userTest)
})



// enpoint de telemetria
app.get('/ping', (req, res) => {
    res.send('pong');
})



// Routes
app.use("/api/user", usersRoutes)
app.use("/api/pet", petsRoutes)
app.use('/', viewRoutes)


app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
})
