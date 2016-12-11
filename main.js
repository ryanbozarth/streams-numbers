var Read = require('./read');
var Filter = require('./filter');
var Log = require('./write');
var read = new Read();
var filter = new Filter();
var log = new Log();


read.pipe(filter).pipe(log);






// num.on('data', function(chunk) {
//   console.log(chunk.toString());
// })
