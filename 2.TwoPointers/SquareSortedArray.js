
//after squaring, graphed out, imagine a troph, so both ends can have the higher value
//allocate space in an array equal to length of the input array
//have a pointer for the last index in that array
//have a left and right pointer for the input array, starting at index 0 and index end
//keep adding to new array while the left <= right, meaning stop when the two pointers meet
  //if the square of the leftVal > square of rightVal, or vise versa, fill in the new array at the nextIndexToAddTo pointer, then move the pointer up(left pointer) or down(right pointer)
  //decrement this after
//start with pointer on both ends

const make_squares = function(arr) {
  let squares = new Array(arr.length).fill(0); //.fill unecessary, costs O(n) time
  let nextIndexToAddTo = squares.length-1;
  let left = 0;
  let right = arr.length -1;
  while (left <= right) {
    let leftVal = arr[left]**2;
    let rightVal = arr[right]**2;
    //starting to add to squares array from the end
    if (leftVal > rightVal) {
      squares[nextIndexToAddTo] = leftVal;
      left++;
    } else {
      squares[nextIndexToAddTo] = rightVal;
      right--;
    }
    nextIndexToAddTo--;
  }

  return squares;
};

