import express from 'express';
import productsRouter from './routes/products.router.js';

const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
app.get('ping', (req, res) => {
    res.send('pong');
})
app.use('/api/products', productsRouter);

// TODO - implement cart
// // Ejemplo para el Carrito
// const carts = [
//     {
//         userId: 1,
//         products: [
//             { id: 1, quantity: 2 },
//             { id: 2, quantity: 1 },
//         ],
//     },
//     {
//         userId: 2,
//         products: [
//             { id: 1, quantity: 3 },
//             { id: 3, quantity: 1 },
//         ],
//     },
//     //... more carts...
// ]


const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});