/*
We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. This means that the object with sequence number 3 was created just before the object with sequence number 4.

Write a function to sort the objects in-place on their creation sequence number in O(n)O(n) and without using any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

Example 1:

Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5]
*/

function cyclic_sort(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1; //calculate the index of the current value
    if (nums[i] !== nums[j]) { //if the val at the current index and calculated index are not the same, swap them
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1; //if they are the same value, then advance i forward
    }
  }
  return nums;
}

//O(N) + O(N-1) time, O(1) space