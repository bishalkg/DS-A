// is not a Binary Search Tree, just a Binary Tree (ie not balanced)
//worst case O(n) if not balanced
var maxDepthBT = function(root) {
  if (!root) return 0;
  var callstack = [root];
  var depths = [1];
  var maxDepth = 0;
  while (callstack.length) {
    var currNode = callstack.pop();
    var currDepth = depths.pop();
    if (currNode !== null) {
      maxDepth = Math.max(currDepth, maxDepth);
      callstack.push(currNode.right)//push right before left so it follows the same path as the recursive solution below
      depths.push(currDepth+1)
      callstack.push(currNode.left)
      depths.push(currDepth+1)

    }
  }

  return maxDepth;

}

var maxDepthBT = function(root) {
  if (!root) return 0;//once we've reached the leafs, return 0 to start the chain of addition computations
  return 1 + Math.max(maxDepthBT(root.left),maxDepthBT(root.right));
}