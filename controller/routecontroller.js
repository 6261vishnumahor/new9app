const User =require('../models/user.js')
function home(req,res){
    const a=23
    res.render("home",{a})
    
}
function about(req,res){
    const b=[23,24,25,26]
    res.render("about",{b})
}
function adddata(req,res){
    res.render("adddata")
}
// function showdata(req,res){
//     let name=req.body.name
//     let email=req.body.email
//     let obj={
//         id:id++,
//         name,
//         email
//     }
//     arr.push(obj)
//     console.log(arr)
//     res.redirect("/")

// }

const showdata=async(req,res)=>{
     let name=req.body.name
     let email=req.body.email
     await User.create({name,email})
     res.redirect("/")
}
module.exports={home,about,adddata,showdata}