const http = require("http");
http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  const fs = require("fs");

  switch(path) {
    //get the url if request and depending it will go to the below pages
    //switch/case similar to if/else statments
    //break makes them exclusive else it will go through each case
    case '/':
    //file system module to read files
    //asynch files, nodes continues to run while module loads
    //does not happen at the same time!! finally!!
    //async has performance benefit
      //const fs = require("fs");
      fs.readFile("home.html", (err, data) => {
        if (err) return console.error(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data.toString());
      });
      break;
    case '/about':
    //const fs = require("fs");
    fs.readFile("about.html", (err, data) => {
      if (err) return console.error(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data.toString());
    });
      break;
    case '/help':
    //const fs = require("fs");
    fs.readFile("help.html", (err, data) => {
      if (err) return console.error(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data.toString());
    });
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);
//standard status codes ex. 404 for not found and 200 for sucess

//In class demo, was I listening?
//Routes --URL
//request comes in and get routes

//this is basic routing
