//Shorest Path, Closer Nodes, but uses more Memory
//if you know if node is towards the top of the tree, this is better

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  breadthFirstSearch() {
    var currNode = this.root;
    var list = [];
    var queue = [currNode]; //this is where the more memory comes in, have to keep reference to children

    while (queue.length > 0) {
      currNode = queue.shift();
      list.push(currNode.value);
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
    return list;
  }

  breadthFirstSearchR(queue, list) { // tree.breadthFirstSearchR([tree.root], []); //this.root doesnt work here
    if (!queue.length) return list; //eq to the conditional in the while loop
    let currNode = queue.shift();
    list.push(currNode.value);
    if (currNode.left) {
      queue.push(currNode.left);
    }
    if (currNode.right) {
      queue.push(currNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }

}

