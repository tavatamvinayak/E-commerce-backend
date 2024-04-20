const express = require('express');
const router = express.Router();


// models (schemas)
const Product = require('../models/Product');

router.get('/' ,async(req,res)=>{
    try {
        const Products = await Product.find({});
        res.status(200).json(Products)
        console.log("read Product success")
        
    } catch (error) {
        console.error(error)
        res.status(500).json({massage : "creating Product Error"})
    }
})



module.exports = router;