require('dotenv').config();
const http = require('http');
const app = require('./index')

const server = http.createServer(app)
server.listen(process.env.PORT || 8000,()=>{
    console.log("Server is running at 8000")
});