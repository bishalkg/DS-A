/*
We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

Example 1:

Input: [1, 4, 4, 3, 2]
Output: 4
*/



const find_duplicate = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    var j = nums[i]-1;
    if (nums[j] < 0) {
      return Math.abs(nums[i]);
    } else {
      nums[j] = -1*nums[j];
    }
  }
  return -1;
};

/*
Cyclic Sort Method
This problem follows the Cyclic Sort pattern and shares similarities with Find the Missing Number. Following a similar approach, we will try to place each number on its correct index. Since there is only one duplicate, if while swapping the number with its index both the numbers being swapped are same, we have found our duplicate!
*/

//O(N) time, O(1) space
function find_duplicate(nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else { // we have found the duplicate
        return nums[i];
      }
    } else {
      i += 1;
    }
  }
  return -1;
}
