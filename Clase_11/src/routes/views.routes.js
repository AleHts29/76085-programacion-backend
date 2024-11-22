import { Router } from "express";
const router = new Router();



router.get('/message', (req, res) => {
    res.render('messages')
})



export default router;