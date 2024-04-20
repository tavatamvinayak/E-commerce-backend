const express = require('express');
const router = express.Router();

// middleware
const auth = require('../Middleware/auth');

// models (schemas)
const Product = require('../models/Product');

router.delete('/:id', auth, async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
        const RemoveProduct = await Product.deleteOne({ _id: id })
        res.status(202).json(RemoveProduct);
        console.log("removed Product")

    } catch (error) {
        console.error(error)
        res.status(500).json({ massage: "remove Product Error" })
    }

})



module.exports = router;