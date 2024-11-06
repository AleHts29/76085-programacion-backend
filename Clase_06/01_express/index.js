import express from 'express';

// Declaramos express y asignamos el puerto
const app = express();
const PORT = 8080;



// Crear un enpoint
app.get('/saludo', (req, res) => {
    res.send('Hola Mundo desde Express! usando watch!!');
})


app.get('/bienvenida', (req, res) => {
    res.send('<p style="color:blue"> Bienvenido a Express, estoy usando HTML como respuesta</p>');
})



app.get('/usuario', (req, res) => {
    const user = {
        nombre: 'Juan',
        apellido: "Torres",
        edad: 23,
        correo: 'juan@gmail.com'
    }

    res.send(user)
})


/*=============================================
=         Usando req.params                  =
=============================================*/
// http://localhost:8080/usuario2/juan/perez
app.get('/usuario2/:nombre/:apellido', (req, res) => {
    console.log(req.params);

    res.send(`Hola tu nombre completo es: ${req.params.nombre} ${req.params.apellido}`)
})


/**
 * Ejemplo en vivo: Usando arreglos y request params
 */
const usuarios = [
    { id: 1, nomnbre: "Juan", apellido: "Torres", edad: "X", genero: "M" },
    { id: 2, nomnbre: "Carlos", apellido: "Garcia", edad: "20", genero: "M" },
    { id: 3, nomnbre: "Maria", apellido: "Torres", edad: "15", genero: "F" },
    { id: 4, nomnbre: "Patricia", apellido: "Ramirez", edad: "30", genero: "F" }
];


app.get('/userbyid/:userId', (req, res) => {
    let { userId } = req.params
    console.log(typeof userId);

    const user = usuarios.find(u => u.id === parseInt(userId));

    if (!user) {
        return res.status(404).send('Usuario no encontrado');
    }

    res.send(user)
})


/*=============================================
=         Usando req.query                 =
=============================================*/
const dataArray = []
// http://localhost:8080/createdata/query?nombre=Eli&apellido=Cafiero&edad=38
app.get('/createdata/query', (req, res) => {
    let data = req.query
    console.log(data);

    dataArray.push(data)


    res.send("Se creo el registro de forma correcta")
})


app.get('/findall', (req, res) => {
    res.send(dataArray)
})



app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`);
})