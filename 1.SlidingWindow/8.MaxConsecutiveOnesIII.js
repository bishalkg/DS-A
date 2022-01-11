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


/
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

      max = Math.max(max, end-start+1); //as long as we keep seeing too many zeros, the window will keep shrinking by 1 from the start as it expands by 1 at its end, the window size stays the same
  }
  return max;
};



//grokkings
function length_of_longest_substring(arr, k) {
  let windowStart = 0,
    maxLength = 0,
    maxOnesCount = 0;

  // Try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) {
      maxOnesCount += 1;
    }

    // Current window size is from windowStart to windowEnd, overall we have a maximum of 1s
    // repeating 'maxOnesCount' times, this means we can have a window with 'maxOnesCount' 1s
    // and the remaining are 0s which should replace with 1s.
    // now, if the remaining 0s are more than 'k', it is the time to shrink and slide the window as we
    // are not allowed to replace more than 'k' 0s
    if ((windowEnd - windowStart + 1 - maxOnesCount) > k) { //as long as there are too many zeros, we will keep shrinking
      if (arr[windowStart] === 1) {
        maxOnesCount -= 1;
      }
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}