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

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107

//can't use sliding window, bc includes negative numbers
*/




//optimized O(N) time, O(N) space solution: iterate through the array and keep track of prefix subarray sums in a hash map, starting with prefix: count, { 0: 1 }; the Map says that there is a contigious prefixed subarray that contains the values required to sum up to k up to that current index in the array
//in each iteration:
  //compute the currentSum
  //compute the neededPrefixSum = currentSum - k ; the prefixSum needed to validate a contiguous subarray having the target sum k
  //check the prefixSumMap to see if the neededPrefixSum exists, if so add its count to result count variable
  //add the currentSum (ie. the prefix sum up to that point in the array) to the prefixSumMap
var subarraySum = function(nums, k) {
  var count = 0;
  var currSum = 0;
  var prefixMap = { 0: 1 };
  for (var i = 0; i < nums.length; i++) {
      currSum+=nums[i];
      var reqPrefix = currSum - k;
      if (reqPrefix in prefixMap) {
          count+=prefixMap[reqPrefix];
      }

      if (prefixMap[currSum]) {
          prefixMap[currSum]+=1
      } else {
          prefixMap[currSum] = 1;
      }
  }

  return count;
};



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