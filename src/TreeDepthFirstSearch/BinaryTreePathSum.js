/*
Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
*/

//O(N) where N is the number of nodes in the tree, space is also O(N) bc of recursion stack

const has_path = function(root, sum) {
  if (!root) return false;  //if we've reached a leaf node and haven't yet returned true, then return false all the way down the callstack

  if (root.value === sum && !root.left && !root.right) { //if the root value is the currSum, and it is a leaf node, then return true
    return true;
  }


  return has_path(root.left, sum - root.value) || has_path(root.right, sum - root.value); //sub the current roots value, if either returns true, the  original functional call will return true
  //As the left-child or right-child returns 'true', return 'true' without processing further.
};