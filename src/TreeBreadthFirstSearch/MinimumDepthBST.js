/*
111. Minimum Depth of Binary Tree
Easy

3382

904

Add to List

Share
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/


const find_minimum_depth = function(root) {
  if (!root) return -1;

  let queue = [root];
  let minDepth = 0;
  while (queue.length > 0) {
    let levelSize = queue.length;
    minDepth+=1;
    for (var i = 0; i < levelSize; i++) {
      let currNode = queue.shift();

      if (currNode.left === null && currNode.right === null) { //must be && bc if one side is not null, it still continues so its not a deadend, and we want the minimum length dead end
        return minDepth;
      }

      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
  }

};


//maximum Depth
const find_maximum_depth = function(root) {
  if (!root) return -1;

  let queue = [root];
  let maxDepth = 0;
  while (queue.length > 0) {
    let levelSize = queue.length;
    maxDepth+=1;  //this will increment every level of the tree we are on, until the queue is empty

    for (var i = 0; i < levelSize; i++) {
      let currNode = queue.shift();

      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
  }

  return maxDepth;
};

