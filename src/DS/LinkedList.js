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
    //he uses a more general method!
    //use length to keep track of the index
    //store reference to the nodes next
    //reassign the nodes next to the new node
    //assign the new nodes next to the reference
    const newNode = new Node(value);
    let currNode = this.head;
    while(this._length! === index) {
      currNode = this.next;
    }

    if(currNode._length === index) {
      let following = currNode.next;
      currNode.next = newNode;
      newNode.next = following
    }

    return this;

  }

  //O(n) time and O(1) space
  reverse(head) {
    let previous = null;
    let current = head;
    let following = head;
    while (current) {
      //store reference to the old current.next
      //initially following is pointing to head
      following = following.next;
      //set current.next to previous, the initial assignment the LL points to null (the new tail)
      current.next = previous;
      //advance previous and then advance current (using the reference we stored earlier)
      previous = current;
      //assign the following node that we stored earlier to be the new current node
      current = following;
    }
  }


  // *** since the issue is having potential different list lenghts, we could force them to have the same length! By starting a pointer at each head, and then moving the pointer to the head of the other list when null is reached
  linkedListIntersection(list1, list2) {
    if (list1 === null || list2 === null) return null;
    //traverse the linked list until
    //while pointers are not equal to each other, if  pointer1s value is null (!value), then pointer1 starts again at the head of the other list
    //this works bc when a pointer starts over at the head of the other list, they will traverse the same number of nodes to reach the intersection
    let pointer1 = list1;
    let pointer2 = list2;
    //if pointer1 and pointer2 are the same value, could be a value or they could both null where they would also be equal, so would return null or the value
    while (pointer1 !== pointer2) {
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

