var Numbers = require('./read');
var Filter = require('./filter');
var num = new Numbers();
var filter = new Filter();


num.pipe(filter);
// num.on('data', function(chunk) {
//   console.log(chunk.toString());
// })
