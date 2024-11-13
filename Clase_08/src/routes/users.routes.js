import { Router } from 'express';


const router = Router();



/*=============================================
=                   APIs                     =
=============================================*/
let users = []

// LISTAR
router.get('/', (req, res) => {
    res.send(users)
})


// CREAR
router.post('/', (req, res) => {
    // console.log(req.body);
    let user = req.body

    // asignamos un ID desde nuetro backend
    const numRandom = Math.floor(Math.random() * 200 + 1)
    user.id = numRandom + users.length

    // Validamos
    if (!user.first_name || !user.last_name || !user.email || !user.password) {
        return res.status(400).send('Debe enviar todos los datos')
    }

    users.push(user)

    res.send({ status: 'success', msg: "Usuario creado" })
})


// ACTUALIZAR
router.put('/:userId', (req, res) => {
    // console.log(req.body);
    let userId = parseInt(req.params.userId)
    let userUpdated = req.body

    const userPosition = users.findIndex(user => user.id === userId)

    if (userPosition < 0) {
        return res.status(404).send('Usuario no encontrado')
    }

    users[userPosition] = userUpdated

    res.send({ status: "Success", msg: "Usuario Actualizado." }); //Si no se indica retorna status HTTP 200OK.
})


// ELIMINAR
router.delete('/:userId', (req, res) => {
    // console.log(req.body);
    let userId = parseInt(req.params.userId)


    const userPosition = users.findIndex(user => user.id === userId)
    if (userPosition < 0) {
        return res.status(404).send('Usuario no encontrado')
    }

    // eliminamos al usuario del la lista
    users.splice(userPosition, 1)


    res.send({ status: "Success", msg: "Usuario Eliminado." }); //Si no se indica retorna status HTTP 200OK.
})




// export
export default router;