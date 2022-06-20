const mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createPool({
  connectionLimit:100,
  port: process.env.DB_PORT,
  host: process.env.HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});



// connection.getConnection((error) => {
//   if (!error) {
//     console.log("Connected to MySQL Server!!!");
//   } else {
//     console.log(error);
//   }
// });

module.exports = connection
