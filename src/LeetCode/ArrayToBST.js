/*
108. Convert Sorted Array to Binary Search Tree
Easy

5181

319

Add to List

Share
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.



Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,3] and [3,1] are both a height-balanced BSTs.


Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.

*/


var sortedArrayToBST = function(nums, start=0, end=nums.length-1) {
  if (start > end) return null; //when the tips of the recursive calls are reached there will be a single value, so the index of start and end will be zero, mid will be zero, leading to a end smaller than the start (nums, start, mid-1)
  if (!nums || !nums.length) return null;

  var mid = Math.floor((start+end)/2); //for a sorted array, we can keep it balanced by picking the midpoint of the array as the parent every time
  var node = new TreeNode(nums[mid]);

  node.left = sortedArrayToBST(nums, start, mid-1);
  node.right = sortedArrayToBST(nums, mid+1, end);
  return node;
};





// var sortedArrayToBST = function(nums) {
//     if (nums == null || !nums.length) {
//         return null;
//     }
//     let mid = Math.floor(nums.length / 2);
//     const node = new TreeNode(nums[mid]);
//     node.left = sortedArrayToBST(nums.slice(0, mid));
//     node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
//     return node;
// };