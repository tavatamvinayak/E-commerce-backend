const express = require("express");
const router = express.Router();

// // env access
require("dotenv").config();

// models
const Product = require("../models/Product");

router.get("/:id", async (req, res) => {
  console.log(req.params);

  //Holds value of the query param 'search_product'.
  const product_Details_id = req.params;
  //Do something when the searchQuery is not null.
  if (product_Details_id != null) {
    try {
      let Product_id = await Product.findOne({ _id :product_Details_id.id});
      console.log("Product_id == id " + product_Details_id)
      
      res.status(200).json(Product_id);
      console.log("Product ID read  success");
    } catch (error) {
      console.error(error);
      res.status(500).json({ massage: "ID Product Error" });
    }
  } else {
    response.end();
  }
});
module.exports = router;
