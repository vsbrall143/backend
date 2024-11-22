const http = require("http");   //core module import
const express=require("express");

const app=express();

app.use((req,res,next) => {
    console.log("in the middleware");
    next();
});

app.use((req,res,next) => {
    console.log("in another middleware");
    res.send('<h1>hello form express</h1>');
});

const Server = http.createServer(app);

Server.listen(3000, () => {console.log('Server listening on port 3000');});