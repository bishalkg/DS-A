/*
Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.
*/

const find_successor = function(root, key) {
  if (!root) return null;
  var queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (var i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
      ////////////////////////
      if (curr.val === key) {
        if (queue.length > 0) { //make sure to check that the queue is not already empty

          return queue.shift();
        }
      }
      ////////////////////////
    }

  }
  return null;
};




function find_successor(root, key) {
  if (root === null) {
    return null;
  }

  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    currentNode = queue.shift();
    // insert the children of current node in the queue
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
    // break if we have found the key
    if (currentNode.val === key) {
      break;
    }
  }

  if (queue.length > 0) {
    return queue.peek();
  }
  return null;
}