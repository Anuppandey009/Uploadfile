//  const start=require("./server")
// const express=require('express')

// const userController = require("./controller/user.controller");
// const app= express()
// app.use(express.json())
// app.use("/anup",userController)
// module.exports=app
// start()

const express = require('express');

const productController = require("./controller/user.controller");

const app = express();
app.use(express.json());

app.use("/products", productController)

module.exports = app;
