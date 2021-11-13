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
      callstack.push(currNode.right)
      depths.push(currDepth+1)
      callstack.push(currNode.left)
      depths.push(currDepth+1)

    }
  }

  return maxDepth;

}

var maxDepthBT = function(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepthBT(root.left),maxDepthBT(root.right));
}