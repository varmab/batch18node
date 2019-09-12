var express=require('express');
var router=express.Router();

var db=require('../db');

router.route("/")
    .get(function(req,res){
        db.Book.find({},function(err,books){
            if(err) res.send(err);
            res.send(books);
        })
    })
    .post(function(req,res){
        var newBook=new db.Book(req.body);
        newBook.save(function(err,book){
            if(err) res.send(err);
            res.send(book);
        })
        
    })

router.route("/:id")
    .delete(function(req,res){
        var id=req.params.id;

        db.Book.findByIdAndDelete(id,function(err,book){
            if(err) res.send(err);
            res.send(book);
        })
        
    })
    .put(function(req,res){
        var id=req.params.id;

        db.Book.findByIdAndUpdate(id,{$set:{"author":"John"}},{new:true},function(err,book){
            if(err) res.send(err);
            res.send(book);
        })
        
    })

module.exports=router;