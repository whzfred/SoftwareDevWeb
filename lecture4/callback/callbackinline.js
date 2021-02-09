
var fs = require("fs");

const filename = "file.txt";

fs.readFile(filename, function (error, data) {
	if(error) return console.error(error);
	
	console.log(data.toString());
});

console.log("End of program");