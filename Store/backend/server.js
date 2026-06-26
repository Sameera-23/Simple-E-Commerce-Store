require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);
app.use(
  "/api/products",
  require("./routes/productRoutes")
);
app.use(
  "/api/cart",
  require("./routes/cartRoutes")
);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});
app.get("/hello", (req, res) => {
  res.send("hello");
});
