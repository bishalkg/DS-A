/*
116. Populating Next Right Pointers in Each Node
Medium

4950

205

Add to List

Share
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/



var connect = function(root) {
  if (!root) return root;

  let queue = [root];
  while (queue.length > 0) {
      let levelSize = queue.length;
      let prevNode = null; //start with null


      for (var i = 0; i < levelSize; i++) {
          let currNode = queue.shift();
          if (prevNode) { //only add a .next if prevNode is a real node and not null
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
  }
  return root;

};


//grokkings
function connect_all_siblings(root) {
  if (root === null) {
    return;
  }

  const queue = new Deque();
  queue.push(root);
  let currentNode = null,
    previousNode = null;
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
}