/*
Any problem involving the traversal of a tree in a level-by-level order can be efficiently solved using this approach. We will use a Queue to keep track of all the nodes of a level before we jump onto the next level. This also means that the space complexity of the algorithm will be O(W), where ‘W’ is the maximum number of nodes on any level.
*/


/*
Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.
*/
/*
102. Binary Tree Level Order Traversal
Medium

6579

134

Add to List

Share
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).



Example 1:
*/

//O(N) time, where N = total number of nodes; O(N) worst case space for the result list, and O(N/2) for the queue since the tree can have a max of N/2 on any level
const traverse = function(root) {
  if (!root) return [];

  result = [];
  // TODO: Write your code here
  let queue = [root];
  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelNodes = [];
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      levelNodes.push(curr.val);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    result.push(levelNodes);
  }

  return result;
};

