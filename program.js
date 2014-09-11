var fs = require('fs');
var path = require('path');


// console.log(process.argv[2], process.argv[3]);
fs.readdir(process.argv[2], function(err, files) {
  if (err) throw err;

  var ext = "." + process.argv[3];
  for (var i = 0; i < files.length; i++) {
    if (ext === path.extname(files[i])) {
      console.log(files[i]);
    }
  }

});


// Their solution:

// fs.readdir(process.argv[2], function (err, list) {
//       list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//           console.log(file);
//       });
//     });