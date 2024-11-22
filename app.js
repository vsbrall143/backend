const http = require("http");   //core module import
const express=require("express");
const bodyParser=require("body-parser");   //3rd party package used for parsing autometically


const app=express();

app.use(bodyParser.urlencoded({extended: false}));  //shis middleware parsed the form input autometically it has built in next() function

app.use("/add-product", (req,res,next) => {
 
    res.send(' <form action="/product" method="POST"><label for="title">Title:</label> <input type="text" name="title" id="title"> <label for="size">Size:</label> <input type="text" name="size" id="size"><button type="submit">Add Product</button></form>');
 
});

app.post("/product", (req,res,next) => {
    console.log(req.body);
    res.redirect("/");
});


app.use("/", (req,res,next) => {
 
    res.send('<h1>hello form express</h1>');
});

app.listen(3000);