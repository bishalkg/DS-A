class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this._length) {
      this.head = newNode;
      this.tail = newNode;
      this._length++;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this._length++;
    }
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this._length) {
      this.head = newNode;
      this.tail = newNode;
      this._length++;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this._length++;
    }
    return this;
  }

  traverseToIndexFromHead(index) {
    let currNode = this.head;
    let currIndex = 0;
    while(index !== currIndex) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this._length - 1) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const nodeToReassign = this.traverseToIndexFromHead(index);
    nodeToReassign.prev.next = newNode;
    newNode.prev = nodeToReassign.prev;
    newNode.next = nodeToReassign;
    nodeToReassign.prev = newNode;
    this._length++;
    return this;
  }

}