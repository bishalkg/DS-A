//Less Memory, Does Path Exist?, Can Get Slow

//PreOrder, inOrder, PostOrder


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


  DFinOrder(node, list=[]) {
    if(!node) return [];

    if (node.left) {
      this.DFinOrder(node.left, list);
    }

    list.push(node.value);

    if (node.right) {
      this.DFinOrder(node.right, list)
    }

    return list;
  }

  DFPreOrder(node, list=[]) {
    if (!node) return [];
    list.push(node.value);
    if (node.left) {
      DFPreOrder(node.left, list);
    }
    if (node.right) {
      DFPreOrder(node.right, list);
    }
    return list;
  }

  DFPostOrder(node, list=[]) {
    if (!node) return [];
    if (node.left) {
      DFPostOrder(node, list);
    }
    if (node.right) {
      DFPostOrder(node, list);
    }
    list.push(node.value)
  }

}


// tree.DFPreOrder(tree.root, []);