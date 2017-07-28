function Graph() {
  this.vertices = [];
  this.edges = [];
  this.numberOfEdges = 0;
}

Graph.prototype.addVertex = function(vertex) {
  this.vertices.push(vertex);
  this.edges[vertex] = [];
  console.log(this.vertices)
}

Graph.prototype.addEdge = function(vertex1, vertex2) {
  this.edges[vertex1].push(vertex2);
  this.edges[vertex2].push(vertex1);
  this.numberOfEdges++;
  console.log(this.edges)
}

const graph = new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('z')
graph.addVertex('s')
graph.addEdge('a', 'c')
graph.addEdge('a', 'b')
graph.addEdge('c', 'z')
