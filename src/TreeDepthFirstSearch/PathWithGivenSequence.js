/*
Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
*/

/*
Time complexity#
The time complexity of the above algorithm is O(N)O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once.

Space complexity#
The space complexity of the above algorithm will be O(N)O(N) in the worst case. This space will be used to store the recursion stack. The worst case will happen when the given tree is a linked list (i.e., every node has only one child).
*/

const find_path = function(root, sequence) {
  if (!root) return sequence.length === 0;
  return isValidSequence(root, sequence, 0);
};

const isValidSequence = function(currNode, sequence, seqIndex) {
  if (!currNode) return false; //if the current node is null, then return false, no sequence was found, true was never returned in this path

  let seqLen = sequence.length;
  if (seqIndex >= seqLen || currNode.value !== sequence[seqIndex]) { //if we've reached the end of the sequence, or the current value isn't the value at the current sequence index
    return false;
  }

  if (!currNode.left && !currNode.right && seqIndex === seqLen-1) { //this means the current value is the value at the current seq index, so check if it is a leaf, and if we are at the last index of the sequence
    return true;
  }

  return isValidSequence(currNode.left, sequence, seqIndex+1) || isValidSequence(currNode.right, sequence, seqIndex+1); //increment index by one each call

}

