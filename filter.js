const stream = require('stream');

// filter random numbers < 100 using _transform
function Filter(options) {
  stream.Transform.call(this, options);

}
Filter.prototype = Object.create(stream.Transform.prototype);
Filter.prototype.constructor = Filter;

Filter.prototype._transform = function(chunk, encode, callback) {
  var chunkNumber = chunk.toString();
  if (chunkNumber < 100) {
    this.push(chunk);
  }
  callback();
};

module.exports = Filter;
