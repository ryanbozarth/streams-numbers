const stream = require('stream');

function Log(key, options) {
  stream.Writable.call(this, options);
}


Log.prototype = Object.create(stream.Writable.prototype);
Log.prototype.constructor = Log;

Log.prototype._write = function(chunk, encoding, next){
  process.stdout.write(chunk.toString() + `\n`)
  next();
}



module.exports = Log;
