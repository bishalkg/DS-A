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

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      currNode = this.root;
      while(true) {
        if (value > currNode.value) {
          //go right
          if (!currNode.right) {
            currNode.right = newNode;
            return this;
          }
          currNode = currNode.right;
        }

        if (value < currNode.value) {
          //go left
          if (!currNode.left) {
            currNode.left = newNode;
            return this;
          }
          currNode = currNode.left
        }
      }
    }
  }


  lookup(value) {
    if (!this.root) return false;
    const currNode = this.root;
    while (currNode) {
      if (currNode.value === value) return true;
      if (currNode.value > value) {
        currNode = currNode.left;
      }
      if (currNode.value < value) {
        currNode = currNode.right;
      }
    }
    return false;
  }

  remove(value) {
    const currNode = this.root;
    if (!currNode) return false;
    let parentNode = null;
    while(currNode) {
      if (value < currNode.value) {
        parentNode = currNode;
        currNode = currNode.left;
      } else if (value > currNode.value) {
        parentNode = currNode;
        currNode = currNode.right;
      } else if (currNode.value === value) {
        //traverse and keep track of the currentNodes parent until you find a match

        if (!currNode.right) {
        //no right child
        if (!parentNode) {
          //if the value is on the root node, set the currNodes left as the new root node
          //not too sure what this is doing
          this.root = currNode.left;
        } else {
          //if the current nodes value is less than parents, make sure the other node is on the parents left
          if (currNode.value < parentNode.value) {
            parentNode.left = currNode.left
          } else if (currNode.value > parentNode.value) {
            ///if the current nodes value is greater than parents, make sure the other node is on the parents right (higher goes on right)
            parentNode.right = currNode.left;
          }
        }
        } else if (!currNode.right.left) {
        //right child with no left child



        } else {
        //right child has a left child


        }

        return true;

      }
    }



      //go right, then left left left.. and point that values left to the old values left, and that values right to the old values right
  }



  breadthFirstSearch() {

  }

  depthFirstSearch() {

  }

  breadthFirstSearchRecursive() {

  }

  depthFirstSearchRecursive() {

  }

}