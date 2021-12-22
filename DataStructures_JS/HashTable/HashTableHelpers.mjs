var LimitedArray = function(limit) {
  var storage = [];

  this.get = function(index) {
    checkLimit(index);
    return storage[index];
  };

  this.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };

  this.each = function(cb) {
    for (var i = 0; i < storage.length; i++) {
      cb(storage[i], i, storage);
    }
  };


  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
    return this;
  }

}

//hash function, returns an index within range of max (ie. storage array limit)
//hash function needs to be fast
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
}


// var limitarray = new LimitedArray(8);
// limitarray.set(8, 'newValue'); //error
// limitarray.set(1, 'newValue');
// console.log(limitarray.get(1));

export { LimitedArray, getIndexBelowMaxForKey };

