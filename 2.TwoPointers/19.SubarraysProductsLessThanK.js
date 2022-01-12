/*
713. Subarray Product Less Than K
Medium

3107

107

Add to List

Share
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.



Example 1:

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
Example 2:

Input: nums = [1,2,3], k = 0
Output: 0


Constraints:

1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106
*/

var numSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) return 0; //if the target is less than 1, there can be no result with numbers less than 1 or 0, there are no answers bc the restraint is that nums has values >1
  var count = 0;
  var product = 1;
  var start = 0;
  for (var end = 0; end < nums.length; end++) {
    product*= nums[end]; //multiply for current product
    while (product >= k) { //shrink window if product is greater or equal to target
      product /= nums[start];
      start++;
    }
    count+= end-start+1; //this will account for the current number itself as a subarray, and for all the subarrays before it from start - end
                          //this is because we can ONLY HAVE POSITIVE NUMBERS, and if start to end product is less than the target, then the subarrays below it are also solutions
                          // nums = [10,5,2,6], k = 100 => on first iteration[10], on second we want [10,5] and [5] thus we use end-start+1
  }
  return count;
};

//now what if we wanted to return all the subarrays?

var allSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) return 0;
  var result = [];
  var product = 1;
  var start = 0;
  for (var end = 0; end < nums.length; end++) {
    product *= nums[end];
    while (product >= k) { //shrink if product is greater than target
      product /= nums[start];
      start++;
    }

    var subs = [];
    for (var j = end; j > start -1 ; j--) { //arrays are mutable so the value of subs in the result array will change......
      subs.unshift(nums[j]);
      result.push(subs);
      subs = [...subs];   //this fixes the issue with mutability, we reassign subs to a new array in memory and transfer over the values....at cost of speed
    }
  }
  return result;
}

//below I used a set instead of the O(n) spread operator

var allSubarrayProductLessThanK = function(nums, k) {
  if (k <= 1) return 0;
  var result = [];
  var product = 1;
  var start = 0;
  for (var end = 0; end < nums.length; end++) {
    product *= nums[end];
    while (product >= k) {
      product /= nums[start];
      start++;
    }

    var subs = new Set();
    for (var j = end; j > start -1 ; j--) { //start -1,  to include the single val at the start as well bc that counts as a subarray
      subs.add(nums[j]);
      result.push(Array.from(subs));
    }
  }
  return result;
}