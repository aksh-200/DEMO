var express = require('express');
const path = require('path');

var app = express();

//first o/p display
app.get("/",(req,res)=>
{
  res.send("Welcome to IET");
}
);

app.get("/index",(req,res)=>{
  res.sendFile(path.join(__dirname + "/public/index.html"));
});


app.get("/contact",(req,res)=>{

  res.sendFile(path.join(__dirname+"/public/contact.html"))
});

app.get("/about",(req,res)=>{

  res.sendFile(path.join(__dirname+"/public/about-us.html"))
});
//second o/p display using localhost:8000/product
app.get("/product",(req,res)=>
  {
     var p = {
                "id" : 45,
                "title" : "Gerbera",
                "description" : "Wedding flower",
                "Unit price" : 15,
                "quantity" : 5000
             };
  
             res.send(p);
  }
);

//third o/p display linking or add all static html pages
app.use(express.static('public'));


app.listen(8000);
console.log("App is listening on port 8000");
