// O(n log n)

var mergeSort = (array) => {
  //base case, if we an array length 1 or 0, return
  if (array.length <= 1) return array;

  var midPoint = Math.floor(array.length/2);
  var leftArray = array.slice(0, midPoint);
  var rightArray = array.slice(midPoint);

  //invoke recursively on the left array, and the right array, and then merge the two sorted arrays
  var sortLeft = mergeSort(leftArray);
  var sortRight = mergeSort(rightArray);
  var merged = merge(sortLeft, sortRight)
  return merged;

}


var merge = (leftArray, rightArray) => {

  var merged = [];
  var leftPointer = 0;
  var rightPointer = 0;
  //have a starting pointer for each array   [1*, 2, 3]  [2*, 3, 5]
  //continue the loop until any one pointer has reached the end of either array
  while ( leftPointer < leftArray.length && rightPointer < rightArray.length) {

      var leftVal = leftArray[leftPointer];
      var rightVal = rightArray[rightPointer];
    //compare the values at the left and right pointer
    //push the lesser value into the merged array and move its pointer forward
      if (leftVal < rightVal) {
        merged.push(leftVal);
        leftPointer++;
      } else {
        merged.push(rightVal);
        rightPointer++
      }
  }
    //spread operator to the rescue! it is not possible to know which array will have left over items, so we can just slice according to the pointer indices
  //either the leftArr or the rightArr will be empty, but the array will come out merged, and sorted
  return [...merged, ...leftArray.slice(leftPointer), ...rightArray.slice(rightPointer)]

}



// var mergeSort = function(array) {
//   var midpoint = array.length - 1;
//   var leftarray = mergeSort(array.slice(0, midpoint))
//   var rightarray = mergeSort(array.slice(midpoint));
//   var merged = merged(leftarray, rightarray);
//   return merged;
// }


// var merge = function(leftarray, rightarray) {
//   var merged = [];
//   var leftpointer = 0;
//   var rightpointer = 0;
//   while (leftpointer < leftarray.length && rightpointer < rightarray.length) {
//     //compare values at left and right pointer index
//     //push the lower one to merged, and iterate the pointer index count
//     var leftVal = leftarray[leftpointer];
//     var rightVal = rightarray[rightpointer];
//     if (leftVal < rightVal) {
//       merged.push(leftVal);
//       leftpointer++;
//     } else {
//       merged.push(rightVal);
//       rightpointer++;
//     }
//   }

//   return [...merged, ...leftarray.slice(leftpointer), ...rightarray.slice(rightpointer)]
// }