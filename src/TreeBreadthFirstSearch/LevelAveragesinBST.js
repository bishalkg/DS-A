

/*
Given a binary tree, populate an array to represent the averages of all of its levels.
*/
//O(N) time and space
const find_level_averages = function(root) {
  if (!root) return [];
  result = [];
  let queue = [root]; //use a deque

  while (queue.length > 0) {
    let levelSize = queue.length;
    let currSum = 0;  //let max = -Infinity;
    for (var i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      currSum+=curr.value;  //max = Math.max(max, curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    result.push(currSum/levelSize); //result.push(max)
  }

  return result;
};

/*
Problem 1: Find the largest value on each level of a binary tree.

Solution: We will follow a similar approach, but instead of having a running sum we will track the maximum value of each level.
*/