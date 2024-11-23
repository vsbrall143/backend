const express=require("express");
const bodyParser=require("body-parser");   //3rd party package used for parsing autometically

const app=express();

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));  //shis middleware parsed the form input autometically it has built in next() function

app.use('/admin',adminRoutes); // here '/admin' adds a filtering mechanism which add common starting segment which outsource form routes so that we dont have to repeteadly add /admin in all the paths over the admin.js file 
app.use(shopRoutes);

app.use( (req,res,next) => {
 
    res.status(404).send('<h1>Page Not Found</h1>');
});


app.listen(3000);