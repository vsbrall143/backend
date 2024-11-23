const express =require('express');

const router= express.Router();

// path is /admin/add-product => GET  but admin is added as filter in app.js file 
router.get("/add-product", (req,res,next) => {
 
    res.send(' <form action="/admin/add-product" method="POST"><label for="title">Title:</label> <input type="text" name="title" id="title"> <label for="size">Size:</label> <input type="text" name="size" id="size"><button type="submit">Add Product</button></form>');
 
});

// path is /admin/add-product => POST  but admin is added as filter in app.js file
router.post("/add-product", (req,res,next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports=router;