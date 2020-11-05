export class NodeClass {
  constructor(
    f,
    g,
    h,
    distance,
    parent,
    visited,
    visited_bfs,
    obstacle,
    maze,
    start_node,
    end_node
  ) {
    this.f = f;
    this.g = g;
    this.h = h;
    this.distance = distance;
    this.parent = parent;
    this.visited = visited;
    this.visited_bfs = visited_bfs;
    this.obstacle = obstacle;
    this.maze = maze;
    this.start_node = start_node;
    this.end_node = end_node;
  }
}
