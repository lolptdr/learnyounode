var fs = require('fs');

buf = fs.readFile(process.argv[2], 'utf8', function(err, data){
  if (err) throw err;
  var str = data.split("\n").length;
  // Remove extra \n from end of last line
  console.log(str-1);
});
