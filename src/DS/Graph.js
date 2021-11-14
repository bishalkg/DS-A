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


//fireship Graph

const airports = 'PHX BKK OKC JFK MEX EZE HEL LOS LAX LIM'.split(' ');

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];


//use an adjacency list instead of a matrix bc would take up lot of space

//the graph
const adjacencyList = new Map();

function addNode(airport) {
  adjacencyList.set(airport, []);
}

//add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode); //shorthand, passes in each airport to addNode
routes.forEach(route => addEdge(...route)); //takes in both strings in route array

// console.log(adjacencyList);

//BFS
function bfs(start, target) {

  const visited = new Set();
  const queue = [start];
  while (queue.length > 0) {
    const airport = queue.shift();

    const destinations = adjacencyList.get(airport); //grab all edges, so that they can added to queue, get all neighbors

    for (const destination of destinations) {


      if (destination === target) {
        return true;
      }

      //in order to prevent duplicates and infinite loop
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);  //item only gets enqueued if it has not been visited
        //only want to look at this destinations neighbors if it has not yet been visited, so add to queue
      }
    }
  }
  return false;
}

console.log(bfs('PHX', 'BKK'));


//DFS
function dfs(start, target, visited = new Set()) {

  visited.add(start);
  const destinations = adjacencyList.get(start);
  for (const destination of destinations) {
    if (destination === target) {
      return true;
    }

    if (!visited.has(destination)) {
      return dfs(destination, target, visited);
    }
  }
  return false;
}

console.log(dfs('PHX', 'BKK'));


//O(V + E)   total number of nodes + edges, scales linearly with addition of vertices or edges