const graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;

graph.a = {};
graph.a.fin = 1;

graph.b = {};
graph.b.a = 3;
graph.b.fin = 5;

graph.fin = {};


/* graph above
{
  start: { a: 6, b:2},
  a:     {fin: 1},
  b:     {a: 3, fin:5}
}
*/

const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

/* costs above
{
  a: 6,
  b: 2,
  fin: Infinity,
}
*/

const parents = {};
parents.a = "start";
parents.b = "start";
parents.b = null;

const findLowestCostNode = function(itCosts, processed) {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  Object.keys(itCosts).forEach(node => {
    const cost = itCosts[node];
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  })
  return lowestCostNode;
}


//This is the algorithm
const dijkstras = function(graph, costs, parents) {
  //given graph we can create the initial costs and parents table
  let processed = [];
  let node = findLowestCostNode(costs, processed);

  while(node !== null) {
    const cost = costs[node];

    const neighbors = graph[node];
    Object.keys(neighbors).forEach((n) => {
      //neighbors[n] is the distance form the current node to that neighbor
      const newCost = cost + neighbors[n];
      //if the new calculated cost is less than the current cost for getting to that neighbor from the start
      if (newCost < costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
    });

    processed = [...processed, node];
    node = findLowestCostNode(costs, processed);
  }

  //returns the costs from start to each node
  return {costs: costs, parents: parents};
}


console.log(dijkstras(graph, costs, parents))


//the algorithm
/*
while we have nodes to process
grab the node thats closest to the start
update costs for its neighbors if a lesser value is found
if any neighbors costs were updated, update the neighbors parents to the currNode
mark node as processed
*/




