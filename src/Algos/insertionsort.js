
//from toy problems

var insertionSort = function(array) {
  //iterates over the array, starting at the second position
  for (var i = 1; i < array.length; i ++) {
    //store the current iteration value in a variable
    var currVal = array[i];
    //now need to move elements
    var currPrevIndex = i - 1;
    //as long as the current value of the outer iteration is less than the values before it, this means that the currentVal can be placed somewhere in a previous index
    while (currVal < array[currPrevIndex]) {
      array[currPrevIndex + 1] = array[currPrevIndex];
      currPrevIndex--;
      if (currPrevIndex <=0) {
        break
      }
    }
    //once we have found a spot to place our next val, where it exists the while loop because the curVal is not less than the currentPrevVal, then we can place our currVal at that index(taking into account the curePrevIndex--)
    array[currPrevIndex + 1] = currVal;

  }
  return array;
};