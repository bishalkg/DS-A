/*
75. Sort Colors
Medium

7783

360

Add to List

Share
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.



Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/

var sortColors = function(nums) {
  var low = 0;
  var high = nums.length -1;
  var i = 0;
  while (i <= high) { //high will be decremented and filled with 2's, so only interate up to the first high index in the array
    if (nums[i] === 0) {
      [nums[i], nums[low]] = [nums[low], nums[i]];
      i++;
      low++; //position to place the next 0
    } else if (nums[i] === 1) { //leave as is, move on to the next index
      i++;
    } else {
      //note: we don't know what the value at nums[high] is when swapped here, so we need to check its value in the next iteration, therefore we don't increment i++
      [nums[i], nums[high]] = [nums[high], nums[i]];
      high--; //position to place the next 2
    }
  }
  return nums;
}
//Algorithm
//iterate through the array, have a pointer at the position to place the next 0 (low), and the next 2 (high)
//if currVal is a 0, then swap it with the 'low' position, and advance that pointer and i up by one
//if the currVal is a 1, just keep iterating i++, do nothing
//if the currVal is a 2, swap the currVal with the next 'high' position, and move the pointer down by one so that the next 2 will be placed before this position
  //we dont increment the i++ with high bc we don't know what we swapped for, so we need to check what nums[i] is before we go on
console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([1,0,2,1,0]));