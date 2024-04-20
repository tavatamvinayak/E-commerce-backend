const express = require("express");
const router = express.Router();

// // env access
require("dotenv").config();

// models
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  console.log(req.query.search);

  //Holds value of the query param 'search_product'.
  const search_product = req.query.search;
  //Do something when the searchQuery is not null.
  if (search_product != null) {
    try {
      let Product_Search = await Product.find({ name:search_product});
      console.log("Product_Search == name " + search_product)
      if(Product_Search.length == 0){
        console.log("Product_Search == name is empty" + search_product)
        Product_Search = await Product.find({ brand:search_product});
        console.log("Product_Search == brand " + search_product)
      }

      res.status(200).json(Product_Search);
      console.log("read Product success");
    } catch (error) {
      console.error(error);
      res.status(500).json({ massage: "Search Product Error" });
    }
  } else {
    response.end();
  }
});
module.exports = router;
