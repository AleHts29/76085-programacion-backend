import { Router } from 'express';
import { uploader } from '../utils.js'

const router = Router();


// middleware a nivel de router
router.use(function (req, res, next) {
    console.log("Mi primer Middleware a ni nivel de ROUTER!!!");
    // para salir del MD
    next()
})

let pets = []


// GET
router.get("/", (req, res) => {
    res.send(pets);
})


// POST
router.post("/", (req, res) => {
    let pet = req.body;


    // asignamos id
    const numRandom = Math.floor(Math.random() * 200 + 1)
    pet.id = numRandom + pets.length


    // Validamos
    if (!pet.nombre || !pet.especie) {
        return res.status(400).send('Debe enviar todos los datos')
    }


    // agregamos al array de mascotas
    pets.push(pet);

    // retornamos
    res.send({ status: "success", msg: "Mascota creada" });

})


/*=============================================
=                   Section_02                =
=============================================*/

// Aplicando Middleware
function miMiddleware(req, res, next) {
    console.log("llama a mi middleware a nivel de ENDPOINT..");
    next();
};

router.get('/middleware', miMiddleware, (req, res) => {
    console.log("Mascotas actuales: ");
    console.log(pets);
    res.send(pets);
})




/*=============================================
=                   Section_03                =
=============================================*/
// uploader

router.post('/profile', uploader.single('file'), (req, res) => {

    if (!req.file) {
        return response.status(400).send({ status: "error", mensaje: "No se adjunto archivo." });
    }

    // console.log(req.file);


    // Persistimos una mascota con su foto
    let pet = req.body
    console.log(pet);

    pet.id = Math.floor(Math.random() * 20 + 1);
    pet.image = req.file.path;



    // validamos 
    if (!pet.nombre || !pet.especie) {
        return res.status(400).send({ status: "error", msg: "Valores incompletos" })
    }


    pets.push(pet)



    res.send({ status: "success", msg: "Mascota creado!!!" })

})




// export
export default router;