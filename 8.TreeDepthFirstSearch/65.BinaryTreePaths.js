/*
257. Binary Tree Paths
Easy

3422

164

Add to List

Share
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.
*/




//99.37% faster solution
var binaryTreePaths = function(root) {
  return findPaths(root, '', []);
};

var findPaths = function(currNode, currPath, allPaths) {
  if (!currNode) return allPaths;

  currPath+=(currNode.val);

  if (!currNode.left && !currNode.right) {
      allPaths.push(currPath);
  } else {
      currPath+=('->')
      findPaths(currNode.left, currPath, allPaths);
      findPaths(currNode.right, currPath, allPaths);
  }

  return allPaths;
}
