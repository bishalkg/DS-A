/*
124. Binary Tree Maximum Path Sum
Hard

7890

482

Add to List

Share
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.



Example 1:
*/
//O(N) time and space

var maxPathSum = function(root) {
  if (!root) return 0;
  var maxSum = -Infinity;
  function findMax(currNode) {
      if (!currNode) return 0;
      var leftSum = findMax(currNode.left);
      var rightSum = findMax(currNode.right);
      leftSum = Math.max(leftSum, 0); //ignore negative sums
      rightSum = Math.max(rightSum, 0); //ignore negative sums
      maxSum = Math.max(maxSum, leftSum + rightSum + currNode.val);

      return currNode.val + Math.max(leftSum, rightSum);
  }
  findMax(root);
  return maxSum;
}