var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/batch18");

//Support for ES6 Promises
mongoose.Promise=global.Promise;

var bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:String
})

exports.Book=mongoose.model('Book',bookSchema,"books");

var userSchema=mongoose.Schema({
    firstName:String,
    lastName: String,
    userName:String,
    password: String,
    age:Number,
    active:Boolean
})

exports.User=mongoose.model('User',userSchema,"users")