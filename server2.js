var express=require('express');
var app=express();

var bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

var books=[
    {
        id:1,
        title:"JS Fundamentals",
        author:"Varma"
    },
    {
        id:2,
        title:"React Fundamentals",
        author:"Varma"
    },
    {
        id:3,
        title:"Node Pro",
        author:"Varma"
    }
]

var users=[
    {
        id:1,
        name:"Varma"
    }
]

app.use(express.static("public"))

app.get("/",function(req,res){
    res.send("Welcome to Batch 18 Server")
})

app.get("/api/books",function(req,res){
    res.send(books);
})

//title=ReactPro&author=Varma&id=4

app.post("/api/books",function(req,res){
    var newBook=req.body;
    console.log(newBook)
    books.push(newBook)
    res.send(books)
})

app.delete("/api/books/:id",function(req,res){
    var id=req.params.id;

    var newBooks=books.filter((book)=>{
        return book.id!=id;
    })

    res.send(newBooks);
})

app.put("/api/books/:id",function(req,res){
    var id=req.params.id;

    var book=books.find((book)=>{
        return book.id==id;
    })

    book.title=req.body.title;

    res.send(book);
})


app.get("/api/users",function(req,res){
    res.send(users);
})

//title=ReactPro&author=Varma&id=4

app.post("/api/users",function(req,res){
    var newUser=req.body;
    console.log(newUser)
    users.push(newUser)
    res.send(users)
})

app.delete("/api/users/:id",function(req,res){
    var id=req.params.id;

    var newUsers=users.filter((user)=>{
        return user.id!=id;
    })

    res.send(newUsers);
})

app.put("/api/users/:id",function(req,res){
    var id=req.params.id;

    var user=users.find((user)=>{
        return user.id==id;
    })

    user.name=req.body.name;

    res.send(user);
})


app.listen(5000,()=>{
    console.log("Batch 18 Server is started")
})