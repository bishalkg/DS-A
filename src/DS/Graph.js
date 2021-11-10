class Graph {
  constructor() {
    this.numNodes = 0;
    this.adjacentList = {}
  }

  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numNodes++
    }

  }

  addEdge(node1, node2) {
    //undirected graph
    //if node1/node2 exists in the graph

    if (!this.adjacentList[node1].includes(node2)) {
      this.adjacentList[node1].push(node2);
    }
    if (!this.adjacentList[node2].includes(node1)) {
      this.adjacentList[node2].push(node1);
    }

  }
}