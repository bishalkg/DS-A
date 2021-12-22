var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if (root === null) return true; // return true if reached end of path, or if there is no initial node// once this 'roots' parent is a leaf node
  if (root.value <= min || root.value >= max) { //the equals to here doesnt allow duplicates
    return false;
  }
  return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max)
}

//base case 1: returns true if reached end of its path, meaning did not find invalid nodes, also returns true if the initial node was null
//base case 2: the value of the node must be within bounds of a minimum and maximum
//for the root node, we start with a min of -Inf, and max of +Inf
//if the currentNodes value is not within those bounds -> not a BST
//check recursively for each left and each right child
  //for the left child of the root, the upper bound is the current Nodes value, and the lower bound is still infinity
  //for the right child of the root, the upper bound is Inifinity, and the lower bound is the current Nodes value -- bc nodes on the right should have a greater val in BST
