const express=require ('express')
const router=express.Router();
const {home,about,adddata,showdata}=require("../controller/routecontroller.js")
router.get("/",home)
router.get("/about",about)
router.get("/adddata",adddata)
router.post("/showdata",showdata)


// router.get("/",(req,res)=>{
//     res.send("this is home page")
// })
// router.get("/about",(req,res)=>{
//     res.send("this is about page")
// })
module.exports=router