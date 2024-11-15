import { Router } from "express";
const router = new Router();

let food = [
    { name: "Hamburguesa", price: "10000" },
    { name: "Bana", price: "500" },
    { name: "Soda", price: "700" },
    { name: "Ensalada", price: "3000" },
    { name: "Pizza", price: "15000" }
]


router.get("/food", (req, res) => {

    let userData = {
        name: "Jesus",
        last_name: "Gonzalez",
        role: 'admin',
    }


    res.render("food", {
        user: userData,
        isAdmin: userData.role == 'admin',
        food
    })
})



let users = [
    {
        name: "Mauricio",
        last_name: "Espinosa",
        age: 26,
        phone: "5541231355",
        email: "correomau@correo.com"
    },
    {
        name: "Marisol",
        last_name: "Cadena",
        age: 23,
        phone: "15431231355",
        email: "sol@correo.com"
    },
    {
        name: "Jorge",
        last_name: "Velez",
        age: 32,
        phone: "554122323232",
        email: "jorge@correo.com"
    },
    {
        name: "Uriel",
        last_name: "Dueñas",
        age: 21,
        phone: "123123123",
        email: "uriel@correo.com"
    },
    {
        name: "Veronica",
        last_name: "Duarte",
        age: 36,
        phone: "345345678",
        email: "vero@correo.com"
    }
]


router.get('/user', (req, res) => {
    const random = Math.floor(Math.random() * users.length)

    res.render('user', { user: users[random] })

})



export default router;