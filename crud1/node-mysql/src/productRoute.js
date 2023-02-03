const express = require("express");
const dbConn = require("../confiq/db.config");

const router = express.Router();


//Post Data(insert)
router.post("/addProduct", (req, res) => {
  let emp = req.body;
  console.log("emp", emp);
  dbConn.query("INSERT INTO product SET?", emp, (err, rows) => {
    if (err) res.send(err);
    return res.send("data Add Sussfully");
  });
});

//retrive All Data (get ALL)
router.get("/", (req, res) => {
  dbConn.query(
    "SELECT p1.productId,p1.productName,p1.qtyPerUnit,p1.unitPrice,p1.unitInStock,p1.discontinued,c1.categoryName FROM product as p1 left join category as c1 on c1.categoryId = p1.categoryId;",
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

//Put Data (updateby Id)
router.put("/:id", (req, res) => {
  let data = req.body;
  const { id } = req.params;
  dbConn.query(
    "UPDATE product SET productName=?,qtyPerUnit=?,unitPrice=?,unitInStock=?,discontinued=?,categoryId=? WHERE productId=?"
  ),    
    [
      data.productName,
      data.qtyPerUnit,
      data.unitPrice,
      data.unitInStock,
      data.discontinued,
      data.categoryId,
      id
    ],
    (err, row) => {
      if (err) res.send(err);
      return res.send("data update Sussfully");
    };
});

//getDataById
router.get("/:id", (req, res) => {
  const { id } = req.params;
  dbConn.query(
    `SELECT p1.productId,p1.productName,p1.qtyPerUnit,p1.unitPrice,p1.unitInStock,p1.discontinued,c1.categoryName FROM product as p1 left join category as c1 on c1.categoryId = p1.categoryId where p1.productId = ${id};`,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

//deleteDataById
router.delete("/:id",(req,res)=>{
    const{id} = req.params
     dbConn.query('DELETE FROM product WHERE productId=?',[id],(err,rows)=>{
        if (!err) res.send("Delete Succesfully");
        else console.log(err);
    })
});
module.exports = router;
