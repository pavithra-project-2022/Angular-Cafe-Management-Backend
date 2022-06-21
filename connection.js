const mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createPool({
  connectionLimit : 10,
  host: "us-cdbr-east-05.cleardb.net",
  user: "b3b61e30cb0fce",
  password: "ba39b317",
  database: "heroku_e1e26118f4942d4",
});

// connection.connect((error) => {
//   if (!error) {
//     console.log("Connected to MySQL Server!!!");
//   } else {
//     console.log(error);
//   }
// });



module.exports = connection
