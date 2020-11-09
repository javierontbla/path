import { create_neighbors } from "./create_neighbors";

// A* Pathfinder Algorithm
const calculate_heuristic = (currentNode, endNode) => {
  // distance between the currentNode & endNode
  // sort of pythagorean theorem
  return (
    Math.abs(currentNode.i - endNode.i) + Math.abs(currentNode.j - endNode.j)
  );
};

// function gets called with start and end node only
// because, the nodes are objs that have their neighbors stored
export const a_star_algorithm = (start, end, cols, rows, grid) => {
  // nodes being evaluated
  let open_set = {};
  // nodes done evaluating
  let closed_set = {};
  // answer path nodes
  let path = [];

  // we push the start node to be evaluated and enter the loop
  open_set[`${start.i}${start.j}`] = start;

  while (true) {
    if (Object.keys(open_set).length > 0) {
      // start loop with open_set only containing the start node
      let set = Object.values(open_set);
      let result = set.reduce((res, obj) => {
        return obj.f < res.f ? obj : res;
      });

      let closest_node = `${result.i}${result.j}`;
      // current gets updated everytime with the neighbor node with the lowest F
      let current = open_set[closest_node];

      // these means the algorithm is done
      if (current === end) {
        path.push(current);
        while (current.parent) {
          // add each parent of each node that once was the current node
          path.push(current.parent);
          // going backwards
          current = current.parent;
        }
        // use break, no return
        break;
      }

      // remove current from open_set
      // O(1)
      delete open_set[`${current.i}${current.j}`];
      // add current to closed_set
      closed_set[`${current.i}${current.j}`] = current;

      // only create neighbors for nodes that are being evaluated
      current.neighbors = create_neighbors(
        current.i,
        current.j,
        cols,
        rows,
        grid
      );
      // get the neighbors of current
      for (let i = 0; i < current.neighbors.length; i++) {
        // store individual neighbor
        let neighbor = current.neighbors[i];

        // if neighbors var isn't in closetSet arr, enter statement

        if (
          !closed_set[`${neighbor.i}${neighbor.j}`] &&
          !neighbor.obstacle &&
          !neighbor.maze
        ) {
          let tentative_g = current.g + 1;

          let finalPath = false;
          if (open_set[`${neighbor.i}${neighbor.j}`]) {
            if (tentative_g < neighbor.g) {
              neighbor.g = tentative_g;
              finalPath = true;
            }
          } else {
            neighbor.g = tentative_g;
            open_set[`${neighbor.i}${neighbor.j}`] = neighbor;
            finalPath = true;
          }

          if (finalPath) {
            // calculate temptative distance between neighbor node and end node
            neighbor.h = calculate_heuristic(neighbor, end);
            // f value of the node, this is the actual value
            // that dictate the final cost of the node
            neighbor.f = neighbor.g + neighbor.h;
            neighbor.parent = current;
          }
        }
      }
    } else {
      return [false, false];
    }
  }
  return [Object.values(closed_set).sort((a, b) => (a.g > b.g ? 1 : -1)), path];
};
