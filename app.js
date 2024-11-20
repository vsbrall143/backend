const http= require('http');
 

 Server=http.createServer((req,res)=>{
    console.log("----------------started---------------")
    // console.log(req.url,req.method,req.headers);
    const url=req.url;
    if(url =="/home")
    {
 
        res.write('<html>')
 
        res.write('<body><h1>welcome home<h1> </body>')
        res.write('</html>')
  
    }
    if(url =="/about")
        {
     
            res.write('<html>')
     
            res.write('<body><h1>welcome to about us page<h1> </body>')
            res.write('</html>')
 
        }
    if(url =="/node")
    {
         
                res.write('<html>')
         
                res.write('<body><h1>welcome to my node js project<h1> </body>')
                res.write('</html>')
 
    }
 
 });

Server.listen(3000);