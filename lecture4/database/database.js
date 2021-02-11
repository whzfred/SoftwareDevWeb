var express = require('express')
const mysql = require('mysql')

var app = express()

const serverPort = 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.send("default route")
})

app.get('/temperatures', function (req, res) {
	sendResponseDb(dbcon, res);
	console.log("sending temperatures");
})

const dbcon = mysql.createConnection({
	host: "localhost",
	user: "user",
	password: "pass",
	database: "database"
	});
	
	
function sendResponseDb(dbcon, res) {
	dbcon.query('select * from measurement;', (err, result) => {
		if(err)
			throw err;
		
		
		res.json(result);
	});

}

app.listen(serverPort, () => {
	console.log("Server listening on port: " + serverPort);
})
