var fs = require('fs');

buf = fs.readFileSync(process.argv[2]);

var str = buf.toString().split("\n").length;
// Remove extra \n from end of last line
console.log(str-1);