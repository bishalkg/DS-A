/*
Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths

129. Sum Root to Leaf Numbers
Medium

3606

74

Add to List

Share
You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.


*/


//my solution
const find_sum_of_path_numbers = function(root) {

  let allPathVals = findAllPaths(root, '', []);
  let sum = 0;
  for (var i = 0; i < allPathVals.length; i++) {
    sum+= Number(allPathVals[i])
  }

  //loop over all paths and sum the numbers
  return sum;
};


const findAllPaths = function(currNode, currPath, allPaths) {
  if(!currNode) return allPaths;

  currPath+=currNode.value; //.val for leetcode
  if (!currNode.left && !currNode.right) {
    allPaths.push(currPath);
  } else {
    findAllPaths(currNode.left, currPath, allPaths);
    findAllPaths(currNode.right, currPath, allPaths);
  }

  return allPaths;
}




//grokkings
function find_sum_of_path_numbers(root) {
  return find_root_to_leaf_path_numbers(root, 0);
}


function find_root_to_leaf_path_numbers(currentNode, pathSum) {
  if (currentNode === null) {
    return 0;
  }

  // calculate the path number of the current node
  pathSum = 10 * pathSum + currentNode.val;
  /*
    How do we calculate the path number for a node? Taking the first example mentioned above, say we are at node ‘7’. As we know, the path number for this node is ‘17’, which was calculated by: 1 * 10 + 7 => 17. We will follow the same approach to calculate the path number of each node.
  */

  // if the current node is a leaf, return the current path sum
  if (currentNode.left === null && currentNode.right === null) {
    return pathSum;
  }

  // traverse the left and the right sub-tree
  return find_root_to_leaf_path_numbers(currentNode.left, pathSum) +
         find_root_to_leaf_path_numbers(currentNode.right, pathSum);
}