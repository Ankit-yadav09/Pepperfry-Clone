const express = require("express");

const cartRouter = express.Router();

cartRouter.post("/addItem", async (req, res) => {
  const payload = req.body;
  try {
  } catch (error) {
    res.status(500).send({
      error: true,
      msg: "something went wrong while adding item to cart",
    });
  }
});

cartRouter.get("/", async (req, res) => {
  const payload = req.body;
  try {
  } catch (error) {
    res.status(500).send({
      error: true,
      msg: "something went wrong while adding item to cart",
    });
  }
});

module.exports = { cartRouter };
