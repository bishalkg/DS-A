/*
876. Middle of the Linked List
Easy

3750

99

Add to List

Share
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

*/

//move the fast pointer twice as much as the slow pointer, until the fast pointer reaches null
var middleNode = function(head) {
  var slow = head;
  var fast = head;
  while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }
  return slow;
};