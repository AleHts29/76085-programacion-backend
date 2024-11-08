import express from 'express';

const app = express();


// Middlewares de configuracion
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


const PORT = 9090


// APis

// enpoint de telemetria
app.get('/ping', (req, res) => {
    res.send('pong');
})


let users = []

// LISTAR
app.get('/api/users', (req, res) => {
    res.send(users)
})


// CREAR
app.post('/api/users', (req, res) => {
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
app.put('/api/users/:userId', (req, res) => {
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
app.delete('/api/users/:userId', (req, res) => {
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



app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
})

