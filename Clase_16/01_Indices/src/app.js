import express from 'express';
import __dirname from './util.js';
import { userModel } from './models/user.model.js';


import mongoose from 'mongoose';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Declaración de Routers:


const SERVER_PORT = 9091;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    try {
        // // Idixes
        await mongoose.connect('mongodb://localhost:27017/clase16_indexes_populate?retryWrites=true&w=majority');
        console.log("Conectado con exito a MongoDB usando Moongose.");

        /*
              se utiliza para obtener información detallada sobre cómo se está ejecutando una consulta.
              - El método explain('executionStats') proporciona estadísticas sobre la ejecución de la consulta, incluyendo información sobre el tiempo que tomó, las operaciones realizadas, las etapas de ejecución y otras métricas relevantes.
              - Esta información puede ayudarte a identificar áreas en las que puedes mejorar la eficiencia de tus consultas y optimizar el rendimiento de tu base de datos. Puedes usar esta salida para ajustar índices, estructuras de datos y consultas para lograr un mejor rendimiento en tu aplicación.
              */


        // Crear indices
        // const res_01 = await userModel.find().explain('executionStats')
        // console.log(res_01);


        const res_02 = await userModel.find({ first_name: "Celia" }).explain('executionStats')
        console.log(res_02);

    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();