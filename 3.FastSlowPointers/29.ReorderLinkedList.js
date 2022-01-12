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
//Algorithm
//move fast and slow pointers, till slow is on the 'middle' node
//starting at slow pointer, reverse the LL
//initialize a dummy varible to store the initial head
//while head and newHead are not null
  //store a reference to both head.next and newHead.next
  //if head.next reaches newHead, then we're done with the reordering
  //assign head.next to newHead
  //assign newHead.next to head's original next (stored in next1 ref)
  //advance the head and newHead pointers using the stored reference
//return the dummy which stores the original head

var reorderList = function(head) {
  if (head === null || head.next === null) {
    return;
  }
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


//grokkings had the same logic
var reorderList = function(head) {
  if (head === null || head.next === null) {
    return;
  }

  // find middle of the LinkedList
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // slow is now pointing to the middle node
  headSecondHalf = reverse(slow); // reverse the second half
  headFirstHalf = head;

  // rearrange to produce the LinkedList in the required order
  while (headFirstHalf !== null && headSecondHalf !== null) {
    temp = headFirstHalf.next;
    headFirstHalf.next = headSecondHalf;
    headFirstHalf = temp;

    temp = headSecondHalf.next;
    headSecondHalf.next = headFirstHalf;
    headSecondHalf = temp;
  }
  // set the next of the last node to 'null'
  if (headFirstHalf !== null) {
    headFirstHalf.next = null;
  }
};

function reverse(head) {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}