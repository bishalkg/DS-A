/*
581. Shortest Unsorted Continuous Subarray
Medium

4553

194

Add to List

Share
Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.



Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Example 2:

Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0


Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105


Follow up: Can you solve it in O(n) time complexity?
*/





//O(N)
//where will you have to place the minimum element and the maximum element such that the array will be sorted?
//we find the minimum val going up the array where sort order is incorrect, and the maximum going down the array where sort order is incorrect
//which tells us where we should start and end our sort
var findUnsortedSubarray = function(nums) {

  var min = Infinity;
  var max = -Infinity;
  //find the minimum val from the left to the right, where it starts descending (broken sort)
  for (var i = 0; i < nums.length; i++) {
  if (nums[i] > nums[i+1]) {
      min = Math.min(min, nums[i+1])
      }
  }
  //find the maximum val from the right to the left, where it starts ascending
   for (var i = nums.length-1; i > 0; i--) {
      if (nums[i] < nums[i-1]) {
       max = Math.max(max, nums[i-1]);
      }
  }

  //loop through from the left and track the first index where the val is greater than our minimum
  var l = 0;
  var r = 0;
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] > min) {
          l = i;
          break; //breaking is critical, or else this value will get updated
      }
  }
  //loop through from the right to the left, and track the first index where the val is less than the maximum
   for (var i = nums.length-1; i > 0; i--) {
      if (nums[i] < max) {
          r = i;
          break;
      }
  }

  //return the length of that window, or 0
  return r-l > 0 ? r-l+1 : 0;
};