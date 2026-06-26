const express = require("express");

const router = express.Router();

const {
  getProducts
} = require("../controllers/productController");

router.get("/test", (req, res) => {
  res.send("Products Route Works");
});

router.get("/", getProducts);

module.exports = router;