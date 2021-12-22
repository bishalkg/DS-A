/*
109. Convert Sorted List to Binary Search Tree
Medium

3934

108

Add to List

Share
Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.



Example 1:


Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [0]
Output: [0]
Example 4:

Input: head = [1,3]
Output: [3,1]


Constraints:

The number of nodes in head is in the range [0, 2 * 104].
-105 <= Node.val <= 105

*/





//O(n) bc we see each value in array once?, also iterated linked list once to create array, O(n) space
var sortedListToBST = function(head) {
  var list = [];
  var currNode = head;
  while(currNode){
      list.push(currNode.val);
      currNode = currNode.next;
  }

  var arrayToBST = function(list, start=0, end=list.length-1) {
      if (!list || !list.length) return null;
      if (start > end) return null; //means we've reached our base case of a single node in the list [{node}], so end=mid-1 gives 0-1=-1
      var mid = Math.floor((start+end)/2);
      var node = new TreeNode(list[mid]);
      node.left = arrayToBST(list, start, mid-1);
      node.right = arrayToBST(list, mid+1, end);
      return node;
  }
  var root = arrayToBST(list);
  return root;

};