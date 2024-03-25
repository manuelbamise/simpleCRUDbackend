const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js")
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//routes
app.use("/api/products", productRoute); 


app.get("/", (req, res) => {
  res.send("hello from node API this is express");
});





mongoose
  .connect(
    "mongodb+srv://Admin:gg123.@backenddb.yl0kqh2.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connected to the Database");
    app.listen(3000, () => {
      console.log("server is starting");
    });
  })
  .catch(() => {
    console.log("Failed to conntct to the database");
  });
