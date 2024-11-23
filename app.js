const express=require("express");
const bodyParser=require("body-parser");   //3rd party package used for parsing autometically

const app=express();

// const adminRoutes=require('./routes/admin');
// const shopRoutes=require('./routes/shop');

const loginRoutes=require('./routes/login')
 


app.use(bodyParser.urlencoded({extended: false}));  //shis middleware parsed the form input autometically it has built in next() function


app.use(loginRoutes);
 

// app.use('/admin',adminRoutes);  
// app.use('/shop',shopRoutes);

app.use( (req,res,next) => {
 
    res.status(404).send('<h1>Page Not Found</h1>');
});


app.listen(3000);