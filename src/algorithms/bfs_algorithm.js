// BFS Implementation
import { create_neighbors } from "./create_neighbors";

// Queue Implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // first item
  peek() {
    const value = this.first.value;
    this.dequeue(this.first);
    return value;
  }
  // put in
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
  }

  // put out
  dequeue() {
    if (this.length === 0) return;
    if (this.length === 1) this.last = null;

    const newStart = this.first.next;
    this.first = newStart;
    this.length--;
  }
}

export const bfs_algorithm = (start, end, cols, rows, grid) => {
  let queue = new Queue();
  let visited = [];
  let path = [];

  queue.enqueue(start);
  visited.push(start);
  start.visited_bfs = true;

  while (queue.length > 0) {
    let current = queue.peek();

    // when we hit the end node
    // to end the algorithm
    if (current === end) {
      path.push(current);

      while (current.parent) {
        path.push(current.parent);
        current = current.parent;
      }
      break;
    }

    // add neighbors to only nodes that are being evaluated
    current.neighbors = create_neighbors(
      current.i,
      current.j,
      cols,
      rows,
      grid
    );

    current.neighbors.forEach((neighbor) => {
      if (!neighbor.visited_bfs && !neighbor.obstacle && !neighbor.maze) {
        visited.push(neighbor);
        neighbor.visited_bfs = true;
        neighbor.parent = current;
        queue.enqueue(neighbor);
      }
    });
  }

  return [visited, path];
};
