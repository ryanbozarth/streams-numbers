const stream = require('stream');

//readable stream produce list of random numbers

function Numbers (start, end, options) {
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
  if(this._curr === this._end) {
    this.push(null);
  }
};

// filter random numbers < 100 using _transform
stream.Transform.call(this, options);
Numbers.prototype._transform = function (chunk, encode, callback){
  // chunk.toString());
}


// function Filter(filterProps, options) {
//   if (!(this instanceof Filter)) {
//     return new Filter(filterProps, options);
//   }
// }




module.exports = Numbers;






// function Numbers(options) {
//   stream.Readable.call(this, options);
//   const arr = [];
//   for (var i=0; i < 10; i++) {
//     arr.push(Math.random() * 200);
//   }
//   console.log(arr);
// };
//
// Numbers.prototype = Object.create(stream.Readable.prototype);
// Numbers.prototype.constructor = Numbers;
//
// Numbers.prototype._read = function() {
//   var number = Math.random()
// }

// readable.pipe(writable);
// writable.end[chunk][, encoding][, callback])
