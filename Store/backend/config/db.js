const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "@#$Jabir786",
  database: "ecommerce"
});

module.exports = db.promise();