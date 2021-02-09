var express = require('express')
var app = express()

app.use(express.urlencoded({
extended: true}))

const serverPort = 3000;

app.get('/', function (req, res) {
  res.send('index page requested /')
  console.log("index page sent");
})

app.get('/someDataPath', function (req, res) {
  res.send('someDataPathRequested requested /')

})

app.get('/page', function (req, res) {
  res.send('<html>some tags </html>')

})

app.post('/postPath', function (req, res) {
	var firstName = req.body.fname;
	var lastName = req.body.lname;
	console.log(firstName);
	console.log(lastName);
    console.log("post requested received");
	 res.send("post request received");

})




app.listen(serverPort, () => {
	console.log("Server listening on port: " + serverPort);
})

