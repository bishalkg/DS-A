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