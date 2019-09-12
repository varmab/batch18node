var express=require('express');
var router=express.Router();

var users=[
    {
        id:1,
        name:"Varma"
    }
]

router.route("/")
    .get(function(req,res){
        res.send(users);
    })
    .post(function(req,res){
        var newUser=req.body;
        console.log(newUser)
        users.push(newUser)
        res.send(users)
    })

router.route("/:id")
    .delete(function(req,res){
        var id=req.params.id;

        var newUsers=users.filter((user)=>{
            return user.id!=id;
        })

        res.send(newUsers);
    })
    .put(function(req,res){
        var id=req.params.id;

        var user=users.find((user)=>{
            return user.id==id;
        })

        user.name=req.body.name;

        res.send(user);
    })

module.exports=router;