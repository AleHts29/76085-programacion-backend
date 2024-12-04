import express from 'express';
import __dirname from './utils.js';
import mongoose from 'mongoose';
import usersRouter from './routes/users.router.js'

const app = express();
const PORT = process.env.PORT || 9090;

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get('/ping', (req, res) => {
    res.render("index")
})

// Declaramos el router
app.use('/api/users', usersRouter)



app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})


// Conectamos la base de datos
const DBPATH = "xxxxxx"
const connectMongoDB = async () => {
    try {
        await mongoose.connect(DBPATH)
        console.log("Connected to Mongo");

    } catch (error) {
        console.log("Failed to connect");
    }
}
connectMongoDB()
