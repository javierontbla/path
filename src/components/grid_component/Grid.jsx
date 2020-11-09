import React, { useEffect, useState } from "react";

import { GridContainer, Columns, Rows, NodeContainer } from "./Grid_styles";
import { NodeClass } from "../node_component/Node_Class";
import Node from "../node_component/Node";
import { a_star_algorithm } from "../../algorithms/a_star_algorithm";
import { dijkstra_algorithm } from "../../algorithms/dijkstra";
import { bfs_algorithm } from "../../algorithms/bfs_algorithm";
import { recursive_division } from "../../mazes/recursive_division_algorithm";

const Grid = () => {
  // screen size
  const w_size = Math.floor(window.innerWidth / 30);
  const h_size = Math.floor((window.innerHeight - 150) / 30);
  // creating grid
  const [grid, set_grid] = useState([]);
  // setting i and j coordinates for start node & end node
  const [start_i, set_start_i] = useState(null);
  const [start_j, set_start_j] = useState(null);
  const [end_i, set_end_i] = useState(null);
  const [end_j, set_end_j] = useState(null);
  // start node & end nodes moving actions
  const [moving_start_node, set_moving_start_node] = useState(false);
  const [moving_end_node, set_moving_end_node] = useState(false);
  const [creating_obstacles, set_creating_obstacles] = useState(false);

  useEffect(() => {
    const create_grid = () => {
      const temporary_grid = [];
      for (let i = 0; i < w_size; i++) {
        temporary_grid[i] = [];
        for (let j = 0; j < h_size; j++) {
          temporary_grid[i][j] = new NodeClass(
            0,
            0,
            0,
            i,
            j,
            0,
            null,
            false,
            false,
            false,
            false,
            i === 1 && j === 1 ? true : false, // assign start node
            i === w_size - 2 && j === h_size - 2 ? true : false // assign end node
          );
        }
      }

      set_start_i(1);
      set_start_j(1);
      set_end_i(w_size - 2);
      set_end_j(h_size - 2);

      return temporary_grid;
    };

    set_grid(create_grid());
  }, []);

  const path_animation = (path) => {
    for (let i = 0; i < path.length; i++) {
      // if it is start_node or end_node skip that node
      if (path[i].start_node || path[i].end_node) continue;
      setTimeout(() => {
        // DANGER!!!
        // NEVER DO THIS, IT'S BAD PRACTICE
        // I'M DOING HERE TO AVOID CRASHING REACT'S VIRTUAL DOM
        const node_js = document.getElementById(
          `node_${path[i].i}_${path[i].j}`
        );
        node_js.className = "node_path";
      }, i * 100);
    }
  };

  const visited_nodes_animation = (visited_nodes, path) => {
    for (let i = 0; i < visited_nodes.length; i++) {
      setTimeout(() => {
        // DANGER!!!
        // NEVER DO THIS, IT'S BAD PRACTICE
        // I'M DOING HERE TO AVOID CRASHING REACT'S VIRTUAL DOM
        const node_js = document.getElementById(
          `node_${visited_nodes[i].i}_${visited_nodes[i].j}`
        );
        const node_react = grid[visited_nodes[i].i][visited_nodes[i].j];

        if (node_react.start_node) node_js.className = "node_start";
        else if (node_react.end_node) node_js.className = "node_end";
        else node_js.className = "node_visited";

        // calling final path animation function
        if (i === visited_nodes.length - 1) path_animation(path.reverse());
      }, i * 100);
    }
  };

  const maze_nodes_animation = (maze) => {
    for (let i = 0; i < maze.length; i++) {
      setTimeout(() => {
        // DANGER!!!
        // NEVER DO THIS, IT'S BAD PRACTICE
        // I'M DOING HERE TO AVOID CRASHING REACT'S VIRTUAL DOM
        const node_js = document.getElementById(
          `node_${maze[i].i}_${maze[i].j}`
        );
        const node_react = grid[maze[i].i][maze[i].j];

        if (node_react.start_node) node_js.className = "node_start";
        else if (node_react.end_node) node_js.className = "node_end";
        else node_js.className = "node_obstacle";
      }, i * 80);
    }
  };

  const mouse_action = (action, i, j) => {
    // DANGER!!!
    // NEVER DO THIS, IT'S BAD PRACTICE
    // I'M DOING HERE TO AVOID CRASHING REACT'S VIRTUAL DOM
    const node_js = document.getElementById(`node_${i}_${j}`);
    const node_react = grid[i][j];

    switch (action) {
      case "REMOVE_START_NODE":
        node_js.className = "node_";
        node_react.start_node = false;
        break;
      case "ADD_START_NODE":
        node_js.className = "node_start";
        node_react.start_node = true;
        break;
      case "REMOVE_END_NODE":
        node_js.className = "node_";
        node_react.end_node = false;
        break;
      case "ADD_END_NODE":
        node_js.className = "node_end";
        node_react.end_node = true;
        break;
      case "CREATE_OBSTACLE":
        if (node_react.start_node || node_react.end_node) return;
        if (node_react.obstacle) return;
        node_js.className = "node_obstacle";
        node_react.obstacle = true;
        break;
      default:
        break;
    }
  };

  // pressing mouse
  const on_mouse_down = (i, j) => {
    if (i === start_i && j === start_j) {
      mouse_action("REMOVE_START_NODE", i, j);
      set_moving_start_node(true);
    } else if (i === end_i && j === end_j) {
      mouse_action("REMOVE_END_NODE", i, j);
      set_moving_end_node(true);
    } else {
      set_creating_obstacles(true);
    }
  };

  // moving mouse around
  const on_mouse_enter = (i, j) => {
    if (!creating_obstacles) return;
    if (i !== start_i || (j !== start_j && i !== end_i) || j !== end_j) {
      mouse_action("CREATE_OBSTACLE", i, j);
    }
  };

  // leaving mouse
  const on_mouse_up = (i, j) => {
    if (moving_start_node) {
      mouse_action("ADD_START_NODE", i, j);
      set_moving_start_node(false); // moving start node action end
      set_start_i(i);
      set_start_j(j);
    } else if (moving_end_node) {
      mouse_action("ADD_END_NODE", i, j);
      set_moving_end_node(false); // moving end node action end
      set_end_i(i);
      set_end_j(j);
    } else {
      set_creating_obstacles(false);
    }
  };

  const run_algorithm = (algorithm) => {
    switch (algorithm) {
      case "A_STAR_ALGORITHM":
        const [visited_a_star, path_a_star] = a_star_algorithm(
          grid[start_i][start_j],
          grid[end_i][end_j],
          w_size,
          h_size,
          grid
        );
        if (visited_a_star && path_a_star) {
          visited_nodes_animation(visited_a_star, path_a_star);
        }
        break;

      case "DIJKSTRA_ALGORITHM":
        /*
    const res = dijkstra_algorithm(grid[end_i][end_j], w_size, h_size, grid);
    */
        break;
      case "BFS_ALGORITHM":
        const [visited_bfs, path_bfs] = bfs_algorithm(
          grid[start_i][start_j],
          grid[end_i][end_j],
          w_size,
          h_size,
          grid
        );
        if (visited_bfs && path_bfs) {
          visited_nodes_animation(visited_bfs, path_bfs);
        }
        break;
      default:
        break;
    }
  };

  const run_maze = () => {
    const rec = recursive_division(grid, w_size, h_size);
    maze_nodes_animation(rec);
  };

  return (
    <>
      <button onClick={() => run_maze()}>recursive</button>
      <GridContainer>
        <Columns>
          {grid.map((column, i) => {
            return (
              <Rows>
                {column.map((row, j) => (
                  <NodeContainer
                    key={`node_container_${i}_${j}`}
                    onClick={() => mouse_action("CREATE_OBSTACLE", i, j)}
                    onMouseDown={() => on_mouse_down(i, j)}
                    onMouseUp={() => on_mouse_up(i, j)}
                    onMouseEnter={() => on_mouse_enter(i, j)}
                  >
                    <Node
                      key={`node_${i}_${j}`}
                      column={i}
                      row={j}
                      start_node={grid[i][j].start_node}
                      end_node={grid[i][j].end_node}
                    />
                  </NodeContainer>
                ))}
              </Rows>
            );
          })}
        </Columns>
      </GridContainer>
    </>
  );
};

export default Grid;
