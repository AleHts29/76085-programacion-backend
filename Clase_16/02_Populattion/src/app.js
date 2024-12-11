import express from 'express';
import __dirname from './util.js';
import handlebars from 'express-handlebars';

import mongoose from 'mongoose';
import studentRouter from './routes/students.router.js'
import coursesRouter from './routes/courses.router.js'
import viewsRouter from "./routes/views.router.js";

import studentsModel from './services/db/models/students.js';
import { coursesModel } from './services/db/models/courses.js';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Template engine
 */
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'))

//Declaración de Routers:
app.use('/', viewsRouter);
app.use("/api/students", studentRouter);
app.use("/api/courses", coursesRouter);

const SERVER_PORT = 9091;
app.listen(9091, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    try {

        /*=============================================
        =                   Population                =
        =============================================*/

        await mongoose.connect('mongodb://localhost:27017/colegio_C16?retryWrites=true&w=majority');
        console.log("Conectado con exito a MongoDB usando Moongose.");

        // // 1ro creamos al estudiante
        // let nuevoEstudiante = await studentsModel.create({
        //     name: "Luis",
        //     lastName: "Munar",
        //     age: "20"
        // })

        // id_Course_NodeJS = 66e0d6c356976369c13fd5e2


        // 2do creamos la relacion
        // let student = await studentsModel.findOne({ _id: "6758cd5353c13d0bd50dd23d" })
        // console.log(student);

        // student.courses.push({ course: "64dd760f7f1c803c99747540" })
        // console.log("MEMORIA:", student);


        // // // Actualizamos data en la DB
        // let result = await studentsModel.updateOne({ _id: "6758cd5353c13d0bd50dd23d" }, student)
        // console.log(result);



        // let result = await studentsModel.find()
        // // console.log(result);
        // console.log("Resultado sin Populate: ", JSON.stringify(result, null, '\t'))



        // // Populate
        // // let resultPopulate = await studentsModel.find().populate('courses.course')
        // // console.log("Resultado con Populate: ", JSON.stringify(resultPopulate, null, '\t'));


        // // Usando Middleware
        let resultPopulate = await studentsModel.find()
        console.log("Resultado con Populate: ", JSON.stringify(resultPopulate, null, '\t'));






    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();