/*
234. Palindrome Linked List
Easy

7080

488

Add to List

Share
Given the head of a singly linked list, return true if it is a palindrome.



Example 1:


Input: head = [1,2,2,1]
Output: true
*/

//find the middle node as in middle of linked list
//reverse the linked list from the middle node on
//start pointer at original head, and at the new head (previous will be pointing to the new head since the while (curr) breaks when curr is null)
//while neither heads are null, compare their values, if the vals are different, then return false, else advance both
//return true if false hasn't returned
var isPalindrome = function(head) {
  if (!head) return true;

  var slow = head;
  var fast = head;
  while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }


  var curr = slow;
  var previous = null; //use var newHead = null;
  var following = curr;
  while (curr) {
      following = following.next; //if we use curr.next, don't need to initilize following outside of the loop, but then we would be creating a new var each loop
      curr.next = previous;
      previous = curr;
      curr = following; //when curr is set to following = null, then previous is the new Head, could initialize previous as var newHead
  }


  var slow1 = head;
  var slow2 = previous;


  while (slow1 !== null && slow2 !== null) {
      if (slow1.val !== slow2.val) return false; //check each nodes value, if we find a mismatch, terminate and return false
      slow1 = slow1.next;
      slow2 = slow2.next;
  }
  return true; //if no mismatches were found return true

};