const express = require('express');
var cors = require('cors');
const connection = require('./connection')
const userRoute = require('./routes/user')
const categoryRoute = require('./routes/category')
const productRoute = require('./routes/product')
const billRoute = require('./routes/bill')
const dashboardRoute = require('./routes/dashboard')
const app = express()


connection.query(`create table bill(
    id int NOT NULL AUTO_INCREMENT,
    uuid varchar(200) NOT NULL,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    contactNumber varchar(20) NOT NULL,
    paymentMethod varchar(50) NOT NULL,
    total int NOT NULL,
    productDetails JSON DEFAULT NULL,
    createdBy varchar(255) NOT NULL,
    primary key(id)
  );`)


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRoute)
app.use('/category',categoryRoute)
app.use('/product',productRoute)
app.use('/bill',billRoute)
app.use('/dashboard',dashboardRoute)


// module.exports = app;

app.listen(process.env.PORT || 8000,()=>{
    console.log("Server is running at 8000");
})