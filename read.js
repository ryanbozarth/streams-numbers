const stream = require('stream');

//readable stream produce list of random numbers

function Numbers(start, end, options) {
  stream.Readable.call(this, start, end, options);
  this._start = 0;
  this._end = 10;
  this._curr = this._start;
}

Numbers.prototype = Object.create(stream.Readable.prototype);
Numbers.prototype.constructor = Numbers;

Numbers.prototype._read = function() {
  const buf = new Buffer(String(Math.random() * 200));
  this.push(buf);
  this._curr++;
  if (this._curr === this._end) {
    this.push(null);
  }
};


module.exports = Numbers;
