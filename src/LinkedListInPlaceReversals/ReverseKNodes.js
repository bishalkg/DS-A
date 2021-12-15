/*
25. Reverse Nodes in k-Group
Hard

5681

458

Add to List

Share
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.
*/
var reverseKGroup = function(head, k) {
  if (k <= null || !head) return head;
  var dummy = {next:head};
  var groupPrev = dummy; //ref to node before group

  while(true) {
      var kth = getKthNode(groupPrev, k);
      if (!kth) break; //crucial
      var groupNext = kth.next; //ref to node after group

      var prev = groupNext; //kth.next  //now that we have those outer refs, reverse the LL, but prev should be groupNext, and curr starts as groupPrev.next
      var curr = groupPrev.next;
      while (curr !== groupNext) {
          var next = curr.next;
          curr.next = prev;
          prev = curr;
          curr = next;
      }

      next = groupPrev.next;  //now we have to reassign groupPrev to "start" of the new list, but we need to store the original "start" so we can reset for the next loop
      groupPrev.next = kth;
      groupPrev = next; //now groupPrev points to the last node of the current group, which is the groupPrev of the next group
  }
  return dummy.next;

};

var getKthNode = (groupPrev, k) => {
  while (groupPrev && k > 0) {
      groupPrev = groupPrev.next;
      k--;
  }
  return groupPrev;
}



//Grokkings, slightly different question, this one also reverses a group smaller than size k
/*
Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
*/
function reverse_every_k_elements(head, k) {
  if (k <= 1 || head === null) {
    return head;
  }

  let current = head,
    previous = null;
  while (true) {
    const last_node_of_previous_part = previous;
    // after reversing the LinkedList 'current' will become the last node of the sub-list
    const last_node_of_sub_list = current;
    let next = null; // will be used to temporarily store the next node
    let i = 0;
    while (current !== null && i < k) { // reverse 'k' nodes
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i += 1;
    }

    // connect with the previous part
    //if the last node of previous part is null, means we need to set head to point to previous, previous should be the new "head"
    if (last_node_of_previous_part !== null) {
      last_node_of_previous_part.next = previous;
    } else {
      head = previous;
    }
    // connect with the next part
    //this was the initial "head", so now that its reversed, point it to the current node;   ... -> prev -> current
    last_node_of_sub_list.next = current;

    if (current === null) { //once current has reached null, break
      break;
    }
    previous = last_node_of_sub_list; //reset the previous to be the last node in the current group, before moving on to the next group
  }
  return head;
}


//with my variables
const reverse_every_k_elements = function(head, k) {
  if (!head || k <= 1) return head;

  let prev = null;
  let curr = head;
  while (true) { //while (curr)
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
      head = prev;
    }

    groupEnd.next = curr;
    if (curr === null) break; //if using while(curr) dont need this break

    prev = groupEnd; //set the prev pointer to the end of the previous group

  }

  return head;
}