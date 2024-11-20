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





router.get('/message', (req, res) => {
    res.render('messages')
})



export default router;