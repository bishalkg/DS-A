var binarysearch = function(array, target) {
  var leftIndex = 0;
  var rightIndex = array.length - 1;
  for (var i = 0; i < array.length; i++) {
    var midpoint = Math.floor((leftIndex + rightIndex)/2);
    if (array[midpoint] === target) {
      return midpoint;
    }
    if (array[midpoint] > target) {
      rightIndex = midpoint - 1;

    } else if (array[midpoint] < target) {
      leftIndex = midpoint + 1
    }
  }
  return -1;
}

var testArray = [1, 23, 34, 56, 123, 54]

//recursive solution
var recBinarysearch = function(array, target, leftIndex = 0, rightIndex = array.length - 1) {
  var midpoint = Math.floor((leftIndex + rightIndex) / 2);
  if (array[midpoint] === target) {
    return midpoint;
  }
  if (leftIndex > rightIndex) {
    return -1;
  }
  if (array[midpoint] > target) {
    return recBinarysearch(array, target, 0, midpoint - 1);
  }
  if (array[midpoint] < target) {
    return recBinarysearch(array, target, midpoint + 1, rightIndex);
  }
}


console.log(binarysearch(testArray, 34))
console.log(recBinarysearch(testArray, 34))


//while loop approach

var whileBinarysearch = function(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    let midpoint = Math.floor(leftIndex + rightIndex / 2);

    if (array[midpoint] === target) {
      return midpoint;
    }

    if (array[midpoint] > target) {
      rightIndex = midpoint - 1
    } else {
      leftIndex = midpoint + 1
    }
  }
  return - 1;
}