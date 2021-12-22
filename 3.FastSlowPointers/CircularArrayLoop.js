/*
457. Circular Array Loop
Medium

256

200

Add to List

Share
You are playing a game involving a circular array of non-zero integers nums. Each nums[i] denotes the number of indices forward/backward you must move if you are located at index i:

If nums[i] is positive, move nums[i] steps forward, and
If nums[i] is negative, move nums[i] steps backward.
Since the array is circular, you may assume that moving forward from the last element puts you on the first element, and moving backwards from the first element puts you on the last element.

A cycle in the array consists of a sequence of indices seq of length k where:

Following the movement rules above results in the repeating index sequence seq[0] -> seq[1] -> ... -> seq[k - 1] -> seq[0] -> ...
Every nums[seq[j]] is either all positive or all negative.
k > 1
Return true if there is a cycle in nums, or false otherwise.



Example 1:

Input: nums = [2,-1,1,2,2]
Output: true
Explanation:
There is a cycle from index 0 -> 2 -> 3 -> 0 -> ...
The cycle's length is 3.
*/




var circularArrayLoop = function(nums) {

  for (var i = 0; i < nums.length; i++) {
      var slow = i;
      var fast = i;
      var isForward = i > 0; //boolean for direction, used in helper function to break out of while loop

      while (true) {

          slow = getNextIndex(nums, slow, isForward)
          if (slow === -1) break;


          fast = getNextIndex(nums, fast, isForward)
          if (fast === -1) break;
          fast = getNextIndex(nums, fast, isForward)
          if (fast === -1) break;


          if (fast === slow) return true; //if the indices are the same, there was a cycle, return true
      }
  }
  return false;
};

function getNextIndex(arr, position, isForward) {
  var direction = arr[position] >= 0;

  if (isForward !== direction) return -1; //if not going the same direction, break out of while loop and move onto next position in array

  var nextIndex = (arr[position] + position) % arr.length; //calculate the next index, use modulus to jump back to start of array
  if (nextIndex < 0) { //if index is negative, move array length to get to valid index if you were to go backwards
      nextIndex = nextIndex+arr.length;
  }

  if (position === nextIndex) return -1; //means the cycle was only 1 element, so break out of while loop -- edge case

  return nextIndex;
}