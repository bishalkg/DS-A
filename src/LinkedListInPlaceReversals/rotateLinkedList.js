/*
61. Rotate List
Medium

3553

1218

Add to List

Share
Given the head of a linked list, rotate the list to the right by k places.



Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

*/

var rotateRight = function(head, k) {
  if (!head || !k) return head;

  var listlen = 1;
  var curr = head;
  while(curr.next) {
    curr = curr.next;
    listlen++;
  }
  curr.next = head; //create a circular linked list

  k = k % listlen; //if k is greater than length, then just use remainder to iterate to where it would go
  let skip = listlen - k; //calculate how many nodes to skip during the coming iterations
  var newEnd = curr;      //now we find the newEnding node starting from the head
  for (var i = 0; i < skip-1; i++) {
    newEnd = newEnd.next;
  }

  head = newEnd.next; //set the new head as the current end Nodes next, before we assign its next to null and make it a tail
  newEnd.next = null;

  return head;

}