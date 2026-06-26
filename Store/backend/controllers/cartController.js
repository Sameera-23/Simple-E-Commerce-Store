const db = require("../config/db");

exports.addToCart = async (req, res) => {
  try {

    const { user_id, product_id } = req.body;

    await db.query(
      "INSERT INTO cart(user_id, product_id) VALUES(?, ?)",
      [user_id, product_id]
    );

    res.json({
      success: true,
      message: "Added To Cart"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error"
    });
  }
};

exports.getCart = async (req, res) => {
  try {

    const [rows] = await db.query(`
      SELECT
        cart.id,
        products.name,
        products.price,
        products.image,
        cart.quantity
      FROM cart
      JOIN products
      ON cart.product_id = products.id
    `);

    res.json(rows);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error"
    });
  }
};