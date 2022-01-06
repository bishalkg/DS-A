/*
560. Subarray Sum Equals K
Medium

10412

341

Add to List

Share
Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.



Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

*/


//O(N^2) time limit exceeds
var subarraySum = function(nums, k) {
  var count = 0;
  for (var start = 0; start < nums.length; start++) {
      var sum = 0;
      for (var end = start; end < nums.length; end++) {
          sum+=nums[end];
          if (sum === k) {
              count++;
          }
      }
  }
  return count;
};