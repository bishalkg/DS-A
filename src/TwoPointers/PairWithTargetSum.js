/*
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
*/

//O(N) time, and O(1) space
function pair_with_target_sum(arr, targetSum) {
  let left = 0,
    right = arr.length -1;

  while (left < right) {
    const currSum = arr[left] + arr[right];
    if (currSum === targetSum) return [left, right];

    if (targetSum > currSum) { //if targetSum is greater, we can only move the left pointer, bc the right pointer is already at the end
      left++;
    } else {
      right--;
    }
  }

  return [-1,-1];
}



//O(N) time, and O(N) space
function pair_with_target_sum(arr, targetSum) {
  const nums = {}; // to store numbers and their indices
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (targetSum - num in nums) { //if the target - currentNum is a key in our object, then we found a pair
      return [nums[targetSum - num], i];
    }
    nums[arr[i]] = i; //store the { value: index } in nums object
  }
  return [-1, -1];
}