/*
Reverse alternating K-element Sub-list (medium)#
Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
*/

//same as reverse K nodes, with a twist
const reverse_alternate_k_elements = function(head, k) {
  if (!head || k <= 1) return head;
  let prev = null;
  let curr = head;
  while (curr) {
    let groupPrev = prev;
    let groupEnd = curr;

    let i = 0;
    while (curr && i < k) {
      var next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      i++;
    }

    if (groupPrev !== null) {
      groupPrev.next = prev;
    } else {
      head = prev; //set head so we can return later
    }

    groupEnd.next = curr;

    //instead of resetting prev, we advance prev and curr k times to skip
    let j = 0;
    while (curr && j < k) {
      prev = curr;
      curr = curr.next;
      j++;
    }


  }

  return head;
};