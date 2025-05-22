const express=require ('express')
const app=express();
const router=require("./route/router.js")
const port=require('./config/envConfig.js')

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

// app.get("/",(req,res)=>{
//     res.send("home")
// })
// app.get("/about",(req,res)=>{
//     res.send("about")
// })
app.use(router)
app.listen(port,(req,res)=>{
    console.log("the server running on port 3000")
})