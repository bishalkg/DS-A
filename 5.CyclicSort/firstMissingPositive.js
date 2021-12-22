/*
41. First Missing Positive
Hard

7860

1188

Add to List

Share
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.



Example 1:

Input: nums = [1,2,0]
Output: 3
*/

//do cyclic sort, ignore the numbers < 0 and numbers > length of the nums array; ie. nums[i] > 0 && nums[i] <= length

var firstMissingPositive = function(nums) {
  var i = 0;
  while (i < nums.length) {
      var j = nums[i]-1;
      if (nums[i] !== nums[j] && nums[i] > 0 && nums[i] <= nums.length) {
          [nums[j], nums[i]] = [nums[i], nums[j]];
      } else {
          i++;
      }
  }
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] !== i+1) {
          return i+1;
      }
  }
  return nums.length+1;
}