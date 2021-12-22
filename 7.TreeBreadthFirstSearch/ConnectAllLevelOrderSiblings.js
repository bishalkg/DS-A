
/*
Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.
*/


//this is easier than the connect siblings on each level bc we dont need to track the siblings and levels
//grokkings
function connect_all_siblings(root) {
  if (root === null) {
    return;
  }

  const queue = new Deque();
  queue.push(root);
  let currentNode = null, //this could be defined each time in the while loop but lets use the same variable in memory the whole time
    previousNode = null; //previous Node needs to be defined outside the while loop so that they dont get a initialization every iteration
  while (queue.length > 0) {
    currentNode = queue.shift();
    if (previousNode !== null) {
      previousNode.next = currentNode;
    }
    previousNode = currentNode;
    // insert the children of current node in the queue
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
  return root;
}


//mine
const connect_all_siblings = function(root) {
  if (!root) return root;
  let queue = [root];
  let prevNode = null;
  let seenFirstNode = false;
  while (queue.length > 0) {
    let levelSize = queue.length;
    if (!seenFirstNode) {
      prevNode = null;
    } else {
      prevNode = prevNode;
    }
    for (var i = 0; i < levelSize; i++) { //dont need to loop bc we dont really care about tracking each level, we just want to connect each node to the next as we do Breadth First Traversal
      let currNode = queue.shift();
      if (prevNode) {
        prevNode.next = currNode;
      }
      prevNode = currNode;
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
    seenFirstNode = true;
  }
  return root;
};