
var fs = require("fs");

const filename = "file.txt";

const call = function(error, data)
{
	if(error) return console.error(error);
	console.log(data.toString());
};

fs.readFile(filename, call);

console.log("End of program");