function bubblesort(array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length - 1 - i; j++ ) {
      if (array[j] > array[j + 1]) {
        // [array[j], array[j + 1]] = [array[j + 1], array[j]]
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

let array = [2352,32523,23,12];

console.log(bubblesort(array));