// O(n^2) worst case, O(n log n) average case

const quicksort = (array) => {
  if (array.length < 2) return array;
  if (array.length === 2) return array[0] > array[1] ? [array[0], array[1]] = [array[1], array[0]] : array;
  let pivot = array[array.length - 1];
  let leftarray = [];
  let rightarray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > pivot) rightarray.push(array[i]);
    if (array[i] < pivot) leftarray.push(array[i]);
  }
  return [...quicksort(leftarray), pivot, ...quicksort(rightarray)]
  //pick a pivot, partition into 2 subarrays around the pivot
  //sort each subarray and combine

}


console.log(quicksort([50, 40, 33, 12]))
console.log(quicksort([20, 30, 11, 1, 3, 0]))




//grokkings implementation
function quickSort(array) {
  if (array.length < 2) return array;
  let pivot = array[0];
  //uses .slice(1) bc we want to disclude the pivot which is the first element
  let less = array.slice(1).filter((el) => el <= pivot)
  let greater = array.slice(1).filter((el) => el > pivot)
  return quickSort(less).concat([pivot], quickSort(greater));

}


console.log(quickSort([50, 40, 33, 12]))
console.log(quickSort([20, 30, 11, 1, 3, 0]))