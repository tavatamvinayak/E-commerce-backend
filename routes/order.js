const express = require("express");
const router = express.Router();

// // env access
require("dotenv").config();

const auth = require("../middleware/auth");

const Order = require("../models/Order");

router.post("/order", auth, async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    totalPrice,
    isPaid,
    isDelivered,
  } = req.body;

  try {
    const Orders = new Order();

    console.log("userID " + req.body.userID);

    try {
      Orders.userID = req.userID;
      Orders.orderItems = orderItems;
      Orders.shippingAddress = shippingAddress;
      Orders.paymentMethod = paymentMethod;
      Orders.totalPrice = totalPrice;
      Orders.isPaid = isPaid;
      Orders.isDelivered = isDelivered;
      try {
        const SaveData = await Orders.save();
        res
          .status(201)
          .json({ id: SaveData._id, message: "order succussfully updated" });
      } catch (error) {
        console.log("data save error: " + error);
        res.send(error);
      }
    } catch (error) {
      console.log("object save error: " + error);
      res.send(error);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
