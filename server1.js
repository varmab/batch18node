var express=require('express');
var app=express();

app.use(express.static("public"))

app.get("/",function(req,res){
    res.send("Welcome to Batch 18 Server")
})

app.listen(5000,()=>{
    console.log("Batch 18 Server is started")
})