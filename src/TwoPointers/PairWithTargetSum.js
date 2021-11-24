/*
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
*/


function pair_with_target_sum(arr, targetSum) {
  let left = 0,
    right = arr.length -1;

  while (left < right) {
    const currSum = arr[left] + arr[right];
    if (currSum === targetSum) return [left, right];

    if (targetSum > currSum) {
      left++;
    } else {
      right--;
    }
  }

  return [-1,-1];
}