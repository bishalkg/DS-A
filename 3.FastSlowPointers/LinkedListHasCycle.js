/*
141. Linked List Cycle
Easy

6121

689

Add to List

Share
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/




var hasCycle = function(head) {
  if (head === null || head.next === null) return false;
  var slow = head;
  var fast = head.next;

while (fast !== null && slow !== null) {
  if (slow === fast) return true; //check equality of node itself and not its value, bc can have duplicates [1,1,1,1]
  if (slow.next === null || fast.next === null) return false;
  slow = slow.next;
  fast = fast.next.next;
}
return false
};


//grokkings solution
var hasCycle = function(head) {
  //start both pointers at the head
  var slow = head;
  var fast = head;
  //run the loop until fast reaches null
  while (fast !== null && fast.next !== null) {
    //move fast pointer two steps forward
    fast = fast.next.next;
    //move slow pointer one step forward
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
}