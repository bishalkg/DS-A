/*
142. Linked List Cycle II
Medium

5523

375

Add to List

Share
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.
*/


//O(N) time and space solution
var detectCycle = function(head) {
  if (!head || !head.next) return null;
  var hashSet = new Set();
  while (head) {
      if (hashSet.has(head)) {
          return head;
      } else {
          hashSet.add(head)
      }
      head = head.next;
  }
  return null;
};


//O(N) time and O(1) space
//start with finding if LL has a cycle or not, at which point slow/fast will be on a node within the cycle
//if there is a cycle, start a pointer at head, and move both the slow or fast pointer and the new pointer up by 1 until they meet, and return that
var detectCycle = function(head) {
  if (!head || !head.next) return null;
    var hasCycle = false;
    var slow = head;
    var fast = head;
    while (fast !== null && fast.next !== null) {
      //start by moving slow and fast bc or else they will be equivalent since tjhey boths tart at
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            hasCycle = true;
            break;
        }
    }
    if (hasCycle) {
        var slow2 = head;
        while (slow !== slow2) {
            slow = slow.next;
            slow2 = slow2.next;
        }
        return slow;
    }
    return null;
};