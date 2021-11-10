//O(n^2)

var bubblesort = function(array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length - 1 - i; j++ ) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array;
}

let array = [2352,32523,23,12];
console.log(bubblesort(array));


//start at each index and bubble the largest value to end
  //bubbling requires an inner loop
  //inner loop only has to check length - i values bc the largest value bubbles to the end
  //inner loop has to check i less values

