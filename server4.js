var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path=require("path")

var books=require('./routes/books');
var users=require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))

app.get("/",function(req,res){
    res.send("Welcome to Batch 18 Server")
})

app.get("/books",function(req,res){
    res.sendFile(path.join(__dirname,"public","books.html"))
})

app.all('/api/*', function(req,res,next){
    const auth = {login: "test", password: "12345"} // change this
   
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = new Buffer(b64auth, 'base64').toString().split(':')
   
    // Verify login and password are set and correct
    if (!login || !password || 
        login !== auth.login || 
        password !== auth.password) 
   {
      res.set('WWW-Authenticate', 'Basic realm="nope"') // change this
      res.status(401).send('Request is not authorized. You must pass credentials') 
      return
    }
   else {
    next();
   }
})

app.use("/api/books",books);
app.use("/api/users",users);

app.listen(5000,()=>{
    console.log("Batch 18 Server is started")
})