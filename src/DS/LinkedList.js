class Node {

  constructor(value) {
    this.value = value || null;
    this.next = null;

  }
  //this.previous = null;   doubly linked list
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;

  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this._length++;
      return this;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this._length++
      return this;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this._length++;
      return this;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this._length++;
      return this;
    }
  }

  insert(index, value) {
    //if the index is 0 or the >= tail, prepend or append
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this._length - 1) {
      return this.append(value);
    }

    //store ref to previous node so its next can be assinged to the newNode when the insert index is found
    const newNode = new Node(value);
    let currNode = this.head;
    let prevNode = null;
    let currIndex = 0;
    while(currIndex !== index) {
      //advance prevNode and currNode till we reach index
      prevNode = currNode;
      currNode = currNode.next;
      currIndex++;
    }

    if(currIndex === index) {
      prevNode.next = newNode;
      newNode.next = currNode;
      this._length++;
    }

    return this;
  }


  remove(index) {
    if (index === 0) {
      let newHead = this.head.next;
      //dont need to do this.head.next bc ref will be lost anyway and garbage cleanup will remove it
      this.head.next = null;
      this.head = newHead;
      this._length--;
      return this.head;
    } else if (index > this._length - 1) return null;

    const nodeToReassign = this.traverseToIndex(index - 1);
    if (nodeToReassign.next === this.tail) {
      //if the next val is the tail, then make this node the tail
      this.tail = nodeToReassign;
    }
    //if next was tail, it is now null, or skips over the next node (the node to delete)
    nodeToReassign.next = nodeToReassign.next.next;
    this.length--;

    return this;
  }

  traverseToIndex(index) {
    const currNode = this.head;
    let currIndex = 0;
    while(index !== currIndex) {
      currNode = currNode.next;
      currIndex++;
    }
    return currNode;
  }

  //O(n) time and O(1) space, pass in head or use as method of ll
  reverse(head) {
    let previous = null;
    //either the head is passed in or we reference it from the instance 'this'
    let current = this.head || head;
    let following = this.head || head;
    while (current !== null) {
      //store reference to the old current.next
      //initially following is pointing to head
      following = following.next; //store this ref for later
      //set current.next to previous, the initial assignment the LL points to null (the new tail)
      current.next = previous;
      //advance previous and then advance current (using the reference we stored earlier)
      previous = current;
      //assign the following node that we stored earlier to be the new current node
      current = following;
    }
    // let currHead = this.head;
    // let currTail = this.tail;
    // this.tail = currHead;
    // this.head = currTail;
    [this.head, this.tail] = [this.tail, this.head]
    return this;
  }


  // *** since the issue is having potential different list lenghts, we could force them to have the same length! By starting a pointer at each head, and then moving the pointer to the head of the other list when null is reached
  // O(n + m)
  linkedListIntersection(list1, list2) {
    if (list1 === null || list2 === null) return null;
    //traverse the linked list until
    //while pointers are not equal to each other, if  pointer1s value is null (!value), then pointer1 starts again at the head of the other list
    //this works bc when a pointer starts over at the head of the other list, they will traverse the same number of nodes to reach the intersection
    let pointer1 = list1;
    let pointer2 = list2;
    //if pointer1 and pointer2 are the same value, could be a value or they could both null where they would also be equal, so would return null or the value
    while (pointer1 !== pointer2) {
      //if pointer1 reaches null of the first list, start at the head of the secondlist
      if (!pointer1) {
        pointer1 = list2;
      } else {
        pointer1.next;
      }
      if (!pointer2) {
        pointer2 = list1;
      } else {
        pointer2.next;
      }
    }
    return pointer1;
  }

}





var newList = new LinkedList();
newList.append('a');
newList.append('b');
newList.append('c');
newList.append('d');
newList.append('e');
newList.append('f');
newList.prepend('before a');
newList.insert(0, 'before before a')
newList.insert(1, 'after, before before a')
newList.insert(5, 'inserted_at_5')
newList.reverse();
newList.reverse();
console.dir(newList);


traverseToIndex(index) {
  let currNode = this.head;
  let currIndex = 0;
  while (index !== currIndex) {
    currNode = currNode.next;
  }
  return currNode;
}


