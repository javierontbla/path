// Dijkstra Algorithm
import { create_neighbors } from "./create_neighbors";

export const dijkstra_algorithm = (end, cols, rows, grid) => {
  let min_q = [];
  let visited = [];
  let path = [];

  for (let i = 0; i < grid.length; i++) {
    let column = grid[i];
    for (let j = 0; j < column.length; j++) {
      min_q.push(grid[i][j]);
    }
  }

  while (min_q.length > 0) {
    min_q.sort((node_a, node_b) => node_b.distance - node_a.distance);
    // delete and store current node from min_q array
    let min_value = min_q.pop();

    // if node is an obstacle continue to next iteration
    if (min_value.obstacle || min_value.maze) continue;

    if (min_value === end) {
      path.push(min_value);

      while (min_value.parent) {
        path.push(min_value.parent);
        min_value = min_value.parent;
      }
      break;
    }

    visited.push(min_value);
    min_value.neighbors = create_neighbors(
      min_value.i,
      min_value.j,
      cols,
      rows,
      grid
    );
    for (let i = 0; i < min_value.neighbors.length; i++) {
      let neighbor = min_value.neighbors[i];
      let tempDistance = min_value.distance + 1;

      if (tempDistance < neighbor.distance) {
        neighbor.distance = tempDistance;
        neighbor.parent = min_value;
      }
    }
  }

  return [visited, path];
};
