

const reverse = (head) => {
  let curr = head;
  let newHead = null;
  while (curr) {
    let next = curr.next;
    curr.next = newHead;
    newHead = curr;
    curr = next;
  }
  return newHead;
}