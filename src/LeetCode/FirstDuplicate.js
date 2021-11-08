const firstDup = function(array) {
  let seen = {};
  for (var i = 0; i < array.length; i++) {
    if (seen[array[i]]) {
      return array[i];
    } else {
      seen[array[i]] = array[i];
    }
  }
  return -1;
}

//if we know values of array are between 1 and length of array, this is O(n) time and 0(1) space
const firstDup2 = function(array) {
  for (var i = 0; i < array.length; i++) {
    let mapIndex = Math.abs(array[i]) - 1;

    if (array[mapIndex] < 0) {
      return Math.abs(array[i]);
    }
    array[mapIndex] = -1 * array[mapIndex];
  }

  return -1;
}

var array = [2,2,3,5,3,2];
console.log(firstDup2(array));