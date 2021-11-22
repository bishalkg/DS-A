/*
21. Merge Two Sorted Lists
Easy

9128

903

Add to List

Share
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.



Example 1:


Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]


Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/


var mergeTwoList = function(l1, l2) {
  var dummy = {next:null};
  //save this to return the new head
  var head = dummy;
  //until one list reaches null, we will:
    //assign dummy.next to the lesser valued nodes, advance the pointer for this node
    //then advance the dummy pointer
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }

    dummy = dummy.next;
  }

  //assign the leftover non-null node as the next of the dummy pointer
  if (l1) {
    dummy.next = l1;
  } else {
    dummy.next = l2;
  }

  //return the new head
  return head.next;
}