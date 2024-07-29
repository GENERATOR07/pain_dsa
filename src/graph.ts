import { Queue } from "./queue";

export class Graph<T> {
  private adjacencyList: Map<T, Set<T>>;
  private vertexCount: number;

  constructor() {
    this.adjacencyList = new Map<T, Set<T>>();
    this.vertexCount = 0;
  }
  addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set<T>());
      this.vertexCount++;
    }
  }
  addEdge(vertex1: T, vertex2: T) {
    if (!this.adjacencyList.has(vertex1)) this.addVertex(vertex1);
    if (!this.adjacencyList.has(vertex2)) this.addVertex(vertex2);
    this.adjacencyList.get(vertex1)?.add(vertex2);
    this.adjacencyList.get(vertex2)?.add(vertex1);
  }
  removeVertex(vertex: T) {
    if (!this.adjacencyList.has(vertex)) return;
    for (let adjacentVertex of this.adjacencyList.get(vertex)!) {
      this.adjacencyList.get(adjacentVertex)?.delete(vertex);
    }
    this.adjacencyList.delete(vertex);
    this.vertexCount--;
  }
  removeEdge(vertex1: T, vertex2: T) {
    this.adjacencyList.get(vertex1)?.delete(vertex2);

    this.adjacencyList.get(vertex2)?.delete(vertex1);
  }
  getAdjacencyList(): Map<T, Set<T>> {
    return this.adjacencyList;
  }
  bfs(startVertex: T): T[] {
    const result: T[] = [];
    const visited: Set<T> = new Set<T>();
    const queue = new Queue<T>();
    queue.enqueue(startVertex);
    while (queue.size() > 0) {
      const vertex = queue.dequeue();
      if (vertex && !visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        this.adjacencyList.get(vertex)?.forEach((neighbour) => {
          if (!visited.has(neighbour)) queue.enqueue(neighbour);
        });
      }
    }

    return result;
  }
  dfs(startVertex: T): T[] {
    const result: T[] = [];
    const visited: Set<T> = new Set<T>();

    const dfsVisit = (vertex: T) => {
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        this.adjacencyList.get(vertex)?.forEach((neighbours) => {
          dfsVisit(neighbours);
        });
      }
    };
    dfsVisit(startVertex);
    return result;
  }

  isEmpty(): boolean {
    return this.vertexCount === 0;
  }

  size(): number {
    return this.vertexCount;
  }

  clear(): void {
    this.adjacencyList.clear();
    this.vertexCount = 0;
  }
}
