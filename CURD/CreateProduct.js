const express = require("express");
const router = express.Router();

// middleware
const auth = require("../middleware/auth");
// // models (schemas)
const Product = require("../models/Product");

// // Express validation
const { body, validationResult } = require("express-validator");

router.post("/",auth, async (req, res) => {
  // express validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


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
  const Products = new Product();
  Products.name = name;
  Products.slug = slug;
  Products.category = category;
  Products.image = image;
  Products.price = price;
  Products.brand = brand;
  Products.rating = rating;
  Products.countInStock = countInStock;
  Products.description = description;

  try {
    const createProducts = await Products.save();
    res
      .json({
        createProducts,
        success: true,
        message: "Created Product Success",
      })
      .status(201);
    console.log("create Product success");
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, massage: "creating Product Error" });
  }
});

module.exports = router;
