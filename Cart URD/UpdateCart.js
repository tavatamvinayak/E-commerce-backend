const express = require("express");
const router = express.Router();

// middleware
const auth = require("../Middleware/auth");

// models (schemas)
const Cart = require("../models/Cart");

router.put("/", auth, async (req, res) => {
  let userID = req.body.userID;
  // console.log(userID)
  try {
    const Carts = await Cart.find({ userID: userID });
    // console.log(Carts);
    try {
      let CartId = Carts[0].id;
      // console.log(CartId)

      const req_Cart = req.body;

      const updateCart = await Cart.findByIdAndUpdate(CartId, req_Cart, {
        new: true,
      });
      res.json({ updateCart, success: true }).status(200);
      console.log("update Cart success");
    } catch (error) {
      console.error(error);
      res.status(500).json({ massage: "update Cart Error" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "update Cart Error" });
  }
});

module.exports = router;
