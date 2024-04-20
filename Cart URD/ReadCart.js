const express = require('express');
const router = express.Router();

// middleware
const auth = require('../Middleware/auth');
// models (schemas)
const Cart = require('../models/Cart');

router.get('/', auth ,async(req,res)=>{
    const id = req.body.userID
    try {
        const Carts = await Cart.find({userID: id});
        res.status(200).json(Carts)
        console.log("Cart items read success")
        
    } catch (error) {
        console.error(error)
        res.status(500).json({massage : "Cart Items read fail Error"})
    }
})



module.exports = router;
// {_id: id}