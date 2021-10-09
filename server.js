// const express=require(`express`)

// const connect=require("./config/db")

// const app=express()

// app.use(express.json())

// const start =async ()=>{
//     await connect()
//     app.listen(2345,()=>{
//       console.log("Listening on port 2345");
//     })
// }

// module.exports =start





// const app = require("./index");

// const connect = require("./config/db");
// app.listen(2345, async function () {
//     await connect();
//     console.log("Listening on port 2345");
// })


// const express = require('express');
// const connect = require("./config/db");

// const usersController = require("./controller/user.controller");
// const app = express();
// app.use(express.json());

// app.use("/users", usersController);

// const start = async () => {
//     await connect();
//     app.listen(2244, () => {
//         console.log("Listening on port 2244")
//     })
// }




const app = require("./index");

const connect = require("./config/db");
app.listen(2345, async function () {
    await connect();
    console.log("Listening on port 2345");
})


// module.exports = start;
