/*
448. Find All Numbers Disappeared in an Array
Easy

5641

347

Add to List

Share
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.



Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
*/

var findDisappearedNumbers = function(nums) {
  if (!nums.length) return [];
  var i = 0;
  while (i < nums.length) { //start by running cyclic sort
      var j = nums[i] - 1; //get the equivalent index of the current value
      if (nums[i] !== nums[j]) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
      } else {
          i++;
      }
  }

  var res = [];//then find compare the index+1 to the value at that position to determine if it is missing
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] !== i+1) {
          res.push(i+1);
      }
  }

  return res;

};