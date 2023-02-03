const express= require('express');
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 5000;

//parse request data conntent type application/x-www-form-rulencodeed

app.use(bodyParser.urlencoded({extended:false}))

//PArse request data content type application/json
app.use(bodyParser.json())
// #define root nodemon;
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

const productRoute = require('./src/productRoute');
app.use('/product',productRoute);


// listen to the port

app.listen(port,()=>{
    console.log(`Server is running at the port ${port}`)
})