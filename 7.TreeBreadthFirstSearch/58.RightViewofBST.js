/*
Right View of a Binary Tree (easy)#
Given a binary tree, return an array containing nodes in its right view. The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.
*/



const tree_right_view = function(root) {
  result = [];
  if (!root) return result;
  let queue = [root];
  while (queue.length > 0) {
    let levelSize = queue.length;
    for (var i = 0; i < levelSize; i++) {
      let currNode = queue.shift();
      if (i === levelSize - 1) {
        result.push(currNode.value);
      }
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
  }
  // TODO: Write your code here
  //if its the right most on that level, then add it to result
  return result;
};



/*
Similar Questions#
Problem 1: Given a binary tree, return an array containing nodes in its left view. The left view of a binary tree is the set of nodes visible when the tree is seen from the left side.

Solution: We will be following a similar approach, but instead of appending the last element of each level, we will be appending the first element of each level to the output array.
*/