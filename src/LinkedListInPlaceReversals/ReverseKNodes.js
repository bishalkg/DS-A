


var reverseKGroup = function(head, k) {
  if (!head) return head;
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