const http = require('http');
const serverPort = 8080;

const requestListener = function (req, res) {
  console.log("Request received");	
  var responeMessage ="<html><body><h1>Hello World</h1></body></html>";
  res.writeHead(200);
  res.end(responeMessage);
  console.log(responeMessage);
}

const server = http.createServer(requestListener);
console.log("Simple HTTP server listening on port: " + serverPort);
server.listen(serverPort);