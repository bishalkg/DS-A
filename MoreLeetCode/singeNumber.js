//must be O(n) time and O(1) space

var singleNumber = function(array) {
  var counter = {};
  for (var i = 0; i < array.length; i++) {
    if (`${array[i]}` in counter) {
      delete counter[array[i]];
    } else {
      counter[array[i]] = i;
    }
  }
  return array[Object.values(counter)[0]]
  // return Number(Object.keys(counter)[0]);
}


// console.log(singleNumber([4,1,2,1,2]))

//this version with a set is faster
//any particular number will only have one duplicate, so once it is deleted, it can't be added again to the set from following indices
var singleNumber = function(array) {
  var set = new Set();
  for (var i = 0; i < array.length; i++) {
    if (set.has(array[i])) {
      set.delete(array[i]);
    } else {
      set.add(array[i]);
    }
  }
  return Array.from(set)[0];
}

console.log(singleNumber([4,1,2,1,2]))