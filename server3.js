var express=require("express");
var app=express();
var path=require('path')

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"public/index.html"))
})

app.get("/contact",function(req,res){
    res.sendFile(path.join(__dirname,"public/contact.html"))
})

app.get("/about",function(req,res){
    res.sendFile(path.join(__dirname,"public/about.html"))
})

function saveData(){
    console.log("data is saved")
}

app.get("/signup",function(req,res,next){
    //save data to database
    saveData();
    next();
},
function(req,res,next){
    //email to user

    res.send("Signup completed")
})

app.listen(5000,()=>{
    console.log("Server is started")
})