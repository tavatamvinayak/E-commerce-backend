const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const Cart = require("../../models/Cart");
router.post("/", auth, async function (req, res) {
  const { CartItems } = req.body;
  console.log(CartItems + " CartItems")
  try {
    const Carts = new Cart();
    console.log("userId" + req.body.userId)

    try {
        Carts.userID = req.body.userID;
        Carts.CartItems = CartItems;
      try {
        const SaveData = await Carts.save();
        res
          .status(201)
          .json({ id: SaveData, message: "Cart succussfully updated Added" });
      } catch (error) {
        console.log("Cart data save error: " + error);
        res.send(error);
      }
    } catch (error) {
      console.log("req Cart save error: " + error);
      res.send(error);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }

});
module.exports = router;
