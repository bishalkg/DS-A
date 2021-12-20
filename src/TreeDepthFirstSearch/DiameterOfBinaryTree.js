/*
543. Diameter of Binary Tree
Easy

6591

407

Add to List

Share
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
*/


//O(N) time and space
var diameterOfBinaryTree = function(root) {
  if (!root) return 0;
  var diameter = 0;

  var dfs = function(root) {
      if (!root) return 0;

      var leftHeight = dfs(root.left);
      var rightHeight = dfs(root.right);

      diameter = Math.max(diameter, leftHeight+rightHeight); //mutate diameter var with closure, the diameter is the sum of the two heights, +1 on the first recursive call after backtracking

      return 1 + Math.max(leftHeight, rightHeight); //find the max depth between the left and right nodes
  }

  dfs(root);

  return diameter;
};





//grokkings
class TreeDiameter {
  constructor() {
    this.treeDiameter = 0;
  }

  find_diameter(root) {
    this.calculate_height(root);
    return this.treeDiameter;
  }

  calculate_height(currentNode) {
    if (currentNode === null) {
      return 0;
    }

    const leftTreeHeight = this.calculate_height(currentNode.left);
    const rightTreeHeight = this.calculate_height(currentNode.right);

    // if the current node doesn't have a left or right subtree, we can't have
    // a path passing through it, since we need a leaf node on each side
    if (leftTreeHeight !== 0 && rightTreeHeight !== 0) {
      // diameter at the current node will be equal to the height of left subtree +
      // the height of right sub-trees + '1' for the current node
      const diameter = leftTreeHeight + rightTreeHeight + 1;

      // update the global tree diameter
      this.treeDiameter = Math.max(this.treeDiameter, diameter);
    }

    // height of the current node will be equal to the maximum of the heights of
    // left or right subtrees plus '1' for(the current node
    return Math.max(leftTreeHeight, rightTreeHeight) + 1;
  }
}