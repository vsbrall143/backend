const http = require('http');
const fs = require('fs');

const Server = http.createServer((req, res) => {
  console.log('----------------started---------------');
  const url = req.url;
  const method = req.method;

  if (url === '/') {


    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        data = '';
      }

      const messages = data.split('\n').reverse();

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<html>');
      res.write('<head><title>Enter Message</title><head>');
      res.write('<body>');

      messages.forEach(message => {
        res.write(`<p>${message}</p>`);
      });

      res.write('<form action="/message" method="POST">');
      res.write('<input type="text" name="message">');
      res.write('<button type="submit">Send</button>');
      res.write('</form>');
      res.write('</body>');
      res.write('</html>');
      res.end();
    });
  } 

  else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => 
    {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.appendFile('message.txt', `${message}\n`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      
      res.writeHead(302, {'Location': '/'});
      res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});

Server.listen(3000, () => {
  console.log('Server listening on port 3000');
});


