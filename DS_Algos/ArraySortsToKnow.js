//Time: best and average O(n log n), worst O(n^2).
//Space: worst O(log n)
//use this over mergeSort if the length of the array isn't too large, if space is an issue
//non-stable sorting algo
var quickSort = function(array) {
  if (array.length < 2) return array;

  var pivot = array[0]; //choice of pivot will depend on the input
  var left = array.slice(1).filter((el) => el <= pivot);
  var right = array.slice(1).filter((el) => el > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)]

}



//Time: best and average and worsr O(n log n).
//Space: worst O(n)
//use this over quicksort when space isn't an issue
//is a stable sorting algo
var mergeSort = function(array) {
  if (array.length < 2) return array;

  var midpoint = Math.floor(array.length/2);
  var left = array.slice(0, midpoint);
  var right = array.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right))

  // var sortLeft = mergeSort(left);
  // var sortRight =  mergeSort(right);
  // var merged = merge(sortLeft, sortRight);
  // return merged;
}


var merge = function(left, right) {
  var sorted = [];
  var leftPointer = 0;
  var rightPointer = 0;

  while (leftPointer < left.length && rightPointer < right.length) {
    var leftVal = left[leftPointer];
    var rightVal = right[rightPointer];
    if (leftVal < rightVal) {
      sorted.push(leftVal);
      leftPointer++;
    } else if (rightVal < leftVal) {
      sorted.push(rightVal);
      rightPointer++;
    }
  }
  return [...sorted, ...left.slice(leftPointer), ...right.slice(rightPointer)]

}



//Time: best case O(n), and average and worst O(n^2).
//Space: worst O(1)
//use when array is small or mostly sorted
//a stable sorting algo, and in-place
//this basically shifts previous values to the right until we reach a value that is smaller than the current value, and we place the current value at that smaller values index+1
var insertionSort = function(array) {

  for (var i = 1; i < array.length; i++) {
    var curr = array[i];
    var prevIndex = i - 1;

    while (curr < array[prevIndex] && prevIndex >= 0) {
      array[prevIndex + 1] = array[prevIndex];
      prevIndex--;
    }
    array[prevIndex + 1] = curr;
  }

  return array;
}

var array = [99, 44, 6,2,1,5,63,87,283,4,0];
console.log(quickSort(array));
console.log(mergeSort(array));
console.log(insertionSort(array));
