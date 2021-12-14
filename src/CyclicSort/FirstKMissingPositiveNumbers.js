/*
Find the First K Missing Positive Numbers (hard)#
Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

Example 1:

Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.
*/

//this works for the test cases on grokking
//O(n+k) time, O(k) space bc we expand the nums array if values lie outside the length of the array
const find_first_k_missing_positive = function(nums, k) {
  missingNumbers = [];
  var i = 0;
  while (i < nums.length) {
    var j = nums[i] -1;
    if (nums[i] !== nums[j] && nums[i] > 0 && nums[i]) { //i use the fact that js array works as an array list that can expand, so nums <= length isn't needed
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  var count = k;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== i+1 && count !== 0) {
      missingNumbers.push(i+1);
      count--;
    }
  }

  var len = nums.length;
  while (count !== 0) {
    missingNumbers.push(len+1);
    len++;
    count--;
  }

  return missingNumbers;
};


//O(n+k) time O(k) space to store extraNumbers
function find_first_k_missing_positive(nums, k) {
  const n = nums.length;
  let i = 0;
  while (i < n) {
    const j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  missingNumbers = [];
  const extraNumbers = new Set();
  for (i = 0; i < n; i++) {
    if (missingNumbers.length < k) { //so that we only save K elements
      if (nums[i] !== i + 1) {
        missingNumbers.push(i + 1);
        extraNumbers.add(nums[i]); //save that extraneous number
      }
    }
  }

  // add the remaining missing numbers while we still havent found k numbers yet
  i = 1;
  while (missingNumbers.length < k) {
    const candidateNumber = i + n; //start with the next number after length of the array (n)
    // ignore if the candidate number has already been seen in the nums array
    if (!extraNumbers.has(candidateNumber)) {
      missingNumbers.push(candidateNumber);
    }
    i += 1;
  }
  return missingNumbers;
}