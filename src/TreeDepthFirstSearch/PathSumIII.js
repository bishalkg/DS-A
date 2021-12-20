/*
437. Path Sum III
Medium

6724

348

Add to List

Share
Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
*/


var pathSum = function(root, targetSum) {
  return findPathCount(root, targetSum, []);
};

var findPathCount = function(currNode, targetSum, currPath) {
  if (!currNode) return 0; //return a targetCount of 0 if currNode is null, this will sum with the current targetCount

  currPath.push(currNode.val); //push into stack
  let targetCount = 0;  //initialize a target count for current path
  let currSum = 0;  //for the currentPath, find all possible subpaths with the targetSum
  for (var i = currPath.length-1; i >= 0; i--) {
      currSum+=currPath[i];
      if (currSum === targetSum) {
          targetCount++;
      }
  }

  //sum the targetCount for all possible paths from the currentNode
  targetCount+=findPathCount(currNode.left, targetSum, currPath);
  targetCount+=findPathCount(currNode.right, targetSum, currPath);

  //pop currentNode off of the stack to backtrack
  currPath.pop();

  //return the targetCount of the currentPath, we want to sum all the found target paths
  return targetCount;
}


/*

Time complexity#
The time complexity of the above algorithm is O(N^2)
​​ ) in the worst case, where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once, but for every node, we iterate the current path. The current path, in the worst case, can be O(N) (in the case of a skewed tree). But, if the tree is balanced, then the current path will be equal to the height of the tree, i.e., O(logN). So the best case of our algorithm will be O(NlogN).

Space complexity#
The space complexity of the above algorithm will be O(N). This space will be used to store the recursion stack. The worst case will happen when the given tree is a linked list (i.e., every node has only one child). We also need O(N) space for storing the currentPath in the worst case.

Overall space complexity of our algorithm is O(N).
*/