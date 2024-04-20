const express = require("express");
const router = express.Router();

// middleware
const auth = require("../Middleware/auth");

// models (schemas)
const Product = require("../models/Product");

router.put("/:id", auth, async (req, res) => {
  const id = req.params.id;

  const {
    name,
    slug,
    category,
    image,
    price,
    brand,
    rating,
    countInStock,
    description,
  } = req.body;
  const newProduct= {
    name : name,
    slug : slug,
    category : category,
    image : image,
    price : price,
    brand : brand,
    rating : rating,
    countInStock : countInStock,
    description : description,
  };

  try {
    const updateProduct = await Product.findByIdAndUpdate(id, newProduct, {
      new: true,
    });
    res.json({ updateProduct, success: true }).status(200);
    console.log("update Product success");
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "update Product Error" });
  }
});

module.exports = router;
