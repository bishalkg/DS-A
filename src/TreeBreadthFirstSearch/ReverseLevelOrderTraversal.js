/*
Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.
*/

//[ [ 9, 10, 5 ], [ 7, 1 ], [ 12 ] ]

//same as before but unshift levelNodes to get this order....but this is O(N) operation for the ArrayList
const traverse = function(root) {
  result = [];
  if (!root) return result;

  let queue = [root]; //queue = new Deque();
  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelNodes = [];
    for (var i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      levelNodes.push(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    result.unshift(levelNodes); //the only difference
  }
  return result;
}

//For Java, a Linked List is better since an prepending to an Array List will be O(N) operation
//for Python, C++, and Javascript we will use a double ended queue (deque), which is technically an implementation of a linked list
//for for the solution above, tell the interviewer you are using a dequeue on line 11.