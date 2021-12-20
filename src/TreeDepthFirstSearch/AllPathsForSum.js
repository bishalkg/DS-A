/*
Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
*/

/*
113. Path Sum II
Medium

4025

97

Add to List

Share
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
*/

/*
Time complexity#
The time complexity of the above algorithm is O(N^2)
​​ ), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once (which will take O(N)O(N)), and for every leaf node, we might have to store its path (by making a copy of the current path) which will take O(N).

We can calculate a tighter time complexity of O(NlogN) from the space complexity discussion below.

Space complexity#
If we ignore the space required for the allPaths list, the space complexity of the above algorithm will be O(N) in the worst case. This space will be used to store the recursion stack. The worst-case will happen when the given tree is a linked list (i.e., every node has only one child).
*/


var pathSum = function(root, targetSum) {
  return findpathSums(root, targetSum, [], []);
};

var findpathSums = function(currNode, targetSum, currPath, allPaths) {
  if (!currNode) return allPaths;

  currPath.push(currNode.val);

  if (currNode.val === targetSum && !currNode.left && !currNode.right) { //remove the targetSum check to return allPaths of a BST
    allPaths.push(currPath.slice()); //need a copy of the array
  } else {
      findpathSums(currNode.left, targetSum - currNode.val, currPath, allPaths);
      findpathSums(currNode.right, targetSum - currNode.val, currPath, allPaths);
  }

  currPath.pop(); //pop last value off when backtracking from recursive call

  return allPaths;  //return the result for line 24, the initial invocation
}

/*
Here we have seven nodes (i.e., N = 7). Since, for binary trees, there exists only one path to reach any leaf node, we can easily say that total root-to-leaf paths in a binary tree can’t be more than the number of leaves. As we know that there can’t be more than (N+1)/2 leaves in a binary tree, therefore the maximum number of elements in allPaths will be O((N+1)/2) = O(N)O((N+1)/2)=O(N). Now, each of these paths can have many nodes in them. For a balanced binary tree (like above), each leaf node will be at maximum depth. As we know that the depth (or height) of a balanced binary tree is O(logN) we can say that, at the most, each path can have logNlogN nodes in it. This means that the total size of the allPaths list will be O(N*logN). If the tree is not balanced, we will still have the same worst-case space complexity.

From the above discussion, we can conclude that our algorithm’s overall space complexity is O(N*logN).

Also, from the above discussion, since for each leaf node, in the worst case, we have to copy log(N) nodes to store its path; therefore, the time complexity of our algorithm will also be O(N*logN)
*/