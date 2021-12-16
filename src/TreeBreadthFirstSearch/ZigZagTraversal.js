/*
Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.
*/

const traverse = function(root) {
  result = [];
  if (!root) return result;

  let queue = [root]; //dequeue
  let reverse = false; //first round its just root node so no need to reverse


  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelNodes = []; //def use deque for unshift

    for (let i = 0; i < levelSize; i++) { //we only iterate levelSize times so no need to worry about shifting off curr.left and curr.right of current level
      let curr = queue.shift();

      if (reverse) {  //if nodes should be reversed, pushinto levelNodes in reverse order throughout this for loop, since we are looping over one level of nodes
        levelNodes.unshift(curr.value);
      } else {
        levelNodes.push(curr.value);
      }

      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }

    }
    result.push(levelNodes);
    reverse = !reverse;
  }

  return result;
};




//grokkings implementation
function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);
  leftToRight = true;
  while (queue.length > 0) {

    levelSize = queue.length;
    currentLevel = new Deque();

    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();

      // add the node to the current level based on the traverse direction
      if (leftToRight) {
        currentLevel.push(currentNode.val);
      } else {
        currentLevel.unshift(currentNode.val);
      }

      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel.toArray());
    // reverse the traversal direction
    leftToRight = !leftToRight;
  }

  return result;
}