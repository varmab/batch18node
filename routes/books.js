var express=require('express');
var router=express.Router();

var db=require('../db');

router.route("/")
    .get(function(req,res){
        db.Book.find({})
        .then((books)=>{
            res.status(200).send(books);
        })
        .catch((err)=>{
            res.status(500).send(err);
        })
    })
    .post(function(req,res){
        var newBook=new db.Book(req.body);
        newBook.save()
        .then((book)=>{
            res.send(book);
        })
        .catch((err)=>{
            res.status(500).send(err);
        })
        
    })

router.route("/:id")
    .delete(function(req,res){
        var id=req.params.id;

        db.Book.findByIdAndDelete(id)
        .then((book)=>{
            res.send(book);
        })
        .catch((err)=>{
            res.status(500).send(err);
        })
    })
    .put(function(req,res){
        var id=req.params.id;

        db.Book.findByIdAndUpdate(id,{$set:{"author":"John"}},{new:true},function(err,book){
            if(err) res.send(err);
            res.send(book);
        })
        
    })

router.route("/search/:keyword")
    .get((req,res)=>{
        var keyword=req.params.keyword;
        db.Book.find({title:{$regex:"/" + keyword +"/"}})
        .then((books)=>{
            res.send(books)
        })
        .catch((err)=>{
            res.send(err)
        })
    })

module.exports=router;