function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i+1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

//iterate through list and keep track of the smallest value as well as the currVal of the outer loop, once you reach the end of the list, swap the
//position you were at with the next smallest value found