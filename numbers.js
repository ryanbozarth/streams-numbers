var stream = require('stream');

//readable stream produce list of random numbers
function Numbers(options) {
  stream.Readable.call(this.options);
  this._start = Math.random();
  this._end = '';
  this._curr = this._start;
};

Numbers.prototype._read = function() {
  var number = Math.random()
}
