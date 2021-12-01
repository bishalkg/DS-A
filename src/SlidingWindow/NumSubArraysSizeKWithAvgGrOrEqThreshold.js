/*
1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
Medium

418

51

Add to List

Share
Given an array of integers arr and two integers k and threshold.

Return the number of sub-arrays of size k and average greater than or equal to threshold.



Example 1:

Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
*/

//O(N) time and O(1) space
var numOfSubarrays = function(arr, k, threshold) {
  var count = 0;
  var start = 0;
  var currSum = 0;
  for (var end = 0; end < arr.length; end++) {
      currSum+=arr[end];

      if (end-start+1 === k) {
          if (currSum/k >= threshold) {
              count++;
          }
          currSum-=arr[start];
          start++;
      }

  }

  return count;
};
