const http= require('http');
function rqListner(req,res)
{
    console.log(req);
}

 Server=http.createServer((req,res)=>{
     console.log(req);
 });

Server.listen(3000);