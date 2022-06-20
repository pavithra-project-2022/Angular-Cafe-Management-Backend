const mysql = require("promise-mysql");
require("dotenv").config();

var config = {
 
  port: process.env.DB_PORT,
  host: process.env.HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit:10,
};

let connection = mysql.createPool(config);



// connection.getConnection((error) => {
//   if (!error) {
//     console.log("Connected to MySQL Server!!!");
//   } else {
//     console.log(error);
//   }
// });

module.exports = connection
