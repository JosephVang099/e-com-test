const express = require('express');
const cors = require('cors');
const mysql= require('mysql2');
const app = express();

app.use(express.json());
app.use(cors());

// ESTABLISHED DATABASE CONNECTION
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: 'root',
  password: "password",
  database: 'ecommerceDB'
  ,});

    ecommerceDB.connect(err =>{
    if(err){
        console.log(err.message)
        return;
    }
    console.log("Connected to MySQL database")
});


app.get("/products", (req, res) => {
  const q = "SELECT * FROM products";
  ecommerceDB.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/products", (req, res) => {
  const q = "INSERT INTO products(`product_title`, `product_price`, `product_image`) VALUES (?)";

  const values = [
    req.body.product_title,
    req.body.product_price,
    req.body.product_image,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
app.listen(3000, () => {
  console.log('Server is up on port 8800.')
})