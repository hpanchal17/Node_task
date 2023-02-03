const mysql = require('mysql')
//create mysql connection
const dbConn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'crud_productdb',
});

dbConn.connect((err)=>{
    if(err) throw err;
    console.log("Database connectes Suceesfully")
})

module.exports = dbConn;