/* review */
//from toy problems -- review
// O(n^2) average and worst case
// best case for almost sorted array or small array O(n)

var insertionSort = function(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j;

    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = current;

  }

  return array;
}


var insertionSort = function(array) {
  //iterates over the array, starting at the second position
  for (var i = 1; i < array.length; i++) {
    //store the current iteration value in a variable
    var currVal = array[i];
    //now need to move elements
    var currPrevIndex = i - 1;

    //search all values before the currVal, and if there is a value greater than currVal, move it to the right
    while (currVal < array[currPrevIndex] && currPrevIndex >=0) {
      array[currPrevIndex + 1] = array[currPrevIndex];
      currPrevIndex--;
    }
    //while loop ends when we find a 'previous' value less than currVal, once we have found a spot to place our next val, then we can place our currVal at that index
    array[currPrevIndex + 1] = currVal;

  }
  return array;
};


//


var array = [99, 44, 6,2,1,5,63,87,283,4,0];
console.log(insertionSort(array));



