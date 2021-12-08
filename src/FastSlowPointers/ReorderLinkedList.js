/*
143. Reorder List
Medium

4379

177

Add to List

Share
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
*/

//my solution
var reorderList = function(head) {
  if (!head) return head;
  var slow = head;
  var fast = head;
  while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }

  var newHead = null;
  while (slow) {
      var next = slow.next;
      slow.next = newHead;
      newHead = slow;
      slow = next;
  }

  var dummy = head;
  while (head && newHead) {
      var next1 = head.next;
      var next2 = newHead.next;
      if (head.next === newHead) break;
      head.next = newHead;
      newHead.next = next1;
      head = next1;
      newHead = next2;
  }
  return dummy;
};
