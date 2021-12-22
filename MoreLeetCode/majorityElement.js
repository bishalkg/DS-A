/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

*/


//O(n) time and space
var majorityElement = function(nums) {

  var counter = {};
  for (var i = 0; i < nums.length; i++) {
      if (!counter[nums[i]]) {
          counter[nums[i]] = 1
      } else {
          counter[nums[i]]++;
      }

      if (counter[nums[i]] > nums.length/2) {
          return nums[i];
      }
  }
  return -1;
};


//Boyer-Moore Voting Approach O(n) time O(1) space. This works only bc there is one majority element (defined as appears > length/2 times)
var majorityElement = function(nums) {
  var count = 0;
  var candidate = null;
  for (var i = 0; i < nums.length; i++) {
    if (count === 0) candidate = nums[i]; // if count decremented to zero, update the candidate to the current val
    count+= (nums[i] === candidate) ? 1 : -1; //if the current val is the current candidate, add 1 to count, if not, sub 1 from count, and if ^above
  }
  return candidate;
}


//why can we disregard the previous elements once our count decrements to 0? Because it is impossible to discard more majority elements than minority elements
//basically, elements are balanced off if another element occurs the same number of times, up to that index (with the count-1)

//can also sort the array and return value at the center  ===== not as fast


