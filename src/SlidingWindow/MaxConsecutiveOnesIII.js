/*
1004. Max Consecutive Ones III
Medium

3442

48

Add to List

Share
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.



Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.


Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
Accepted
161,359
Submissions
261,487
*/



var longestOnes = function(nums, k) {
  var max = 0;
  var seenZeros = 0;
  var start = 0;
  for (var end = 0; end < nums.length; end++) {
      if (nums[end] === 0) seenZeros++;

      //slide window if we've seen more than k zeros, since question asks for flipping at MOST k zeros to ones
      if (seenZeros > k) {
          if (nums[start] === 0) seenZeros--; //also need to make sure to decrement count of zero if start of window has 0
          start++;
      }

      max = Math.max(max, end-start+1);
  }
  return max;
};