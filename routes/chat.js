const express =require('express');
const fs = require('fs');

const router= express.Router();

 
router.get("/chat", (req,res,next) => {
 
    res.send('<form action="/chat" method="POST"><input type="text" name="chat_box" id="chat_box"><button type="submit">Send</button></form> ');
});
 
router.post("/chat", (req,res,next) => {
    console.log(req.body);
    res.redirect("/chat");
});

module.exports=router;