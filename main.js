var Numbers = require('./numbers');
var num = new Numbers();
// var Cache = require('./cache');
//var cache = new Cache('alpha1');

num.on('data', function(chunk) {
  console.log(chunk.toString());
})
