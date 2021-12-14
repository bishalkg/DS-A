/*
We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

Example 1:

Input: [3, 1, 2, 5, 2]
Output: [2, 4]
Explanation: '2' is duplicated and '4' is missing.
*/

const find_corrupt_numbers = function(nums) {
  var i = 0;
  while (i < nums.length) {
    var j = nums[i]-1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== i+1) {
      return [nums[i], i+1];
    }
  }
  return [-1, -1];
};