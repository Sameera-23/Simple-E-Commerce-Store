const db = require("../config/db");

exports.getProducts = async (req, res) => {
  try {

    const [rows] = await db.query(
      "SELECT * FROM products"
    );

    res.json(rows);

  } catch (err) {

    console.log("PRODUCT ERROR:");
    console.log(err);

    res.status(500).json({
      error: err.message
    });
  }
};