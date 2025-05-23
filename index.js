const express = require('express')
const app = express();
const router = require("./route/router.js")
const port = require('./config/envConfig.js')
const mongoose = require('mongoose')

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/myapp')
.then(()=>console.log("connect"))
.catch((err)=>console.log("not"))
// mongoose.connect('mongoose.connect(process.env.MONGO_URI)')
// .then(()=>console.log("mongodb connected"))
// .catch((err)=>console.log("not connected"))

// app.get("/",(req,res)=>{
//     res.send("home")
// })
// app.get("/about",(req,res)=>{
//     res.send("about")
// })
app.use(router)
app.listen(port, (req, res) => {
    console.log("the server running on port 3000")
})