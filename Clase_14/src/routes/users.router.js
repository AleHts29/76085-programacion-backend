import { Router } from "express";
import { userModel } from '../models/user.model.js'

const router = Router();


// APIs

// GET
router.get('/', async (req, res) => {
    try {
        // Me traigo la data de la base de datos.
        let users = await userModel.find()
        console.log(users);
        res.send({ result: "Success", payload: users })
    } catch (error) {
        console.log("Error, no se pudo obtener los usuarios de la DB");
    }
})



// POST
router.post('/', async (req, res) => {
    try {
        let { first_name, last_name, email } = req.body;
        // Me traigo la data de la base de datos.
        let user = await userModel.create({ first_name, last_name, email })
        console.log(user);
        res.send({ result: "Success", payload: user })
    } catch (error) {
        console.log("Error, no se pudo crear los usuarios de la DB");
    }
})



// PUT 
router.put('/:id', async (req, res) => {
    try {
        let userUpdated = req.body;
        // Me traigo la data de la base de datos.
        let user = await userModel.updateOne({ _id: req.params.id }, userUpdated)
        console.log(user);
        res.send({ result: "Success", payload: user })
    } catch (error) {
        console.log("Error, no se pudo actualizar los usuarios de la DB");
    }
})



// DELETE
router.delete('/:id', async (req, res) => {
    try {
        // Me traigo la data de la base de datos.
        let user = await userModel.deleteOne({ _id: req.params.id })
        console.log(user);
        res.send({ result: "Success", payload: user })
    } catch (error) {
        console.log("Error, no se pudo eliminar los usuarios de la DB");
    }
})




export default router;