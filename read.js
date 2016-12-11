const stream = require('stream');

function Read(start, end, options) {
  stream.Readable.call(this, start, end, options);
  this._start = 0;
  this._end = 10;
  this._curr = this._start;
}

Read.prototype = Object.create(stream.Readable.prototype);
Read.prototype.constructor = Read;

Read.prototype._read = function() {
  const buf = new Buffer(String(Math.random() * 200));
  this.push(buf);
  this._curr++;
  if (this._curr === this._end) {
    this.push(null);
  }
};


module.exports = Read;
