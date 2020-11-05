import React, { useEffect, useState, useRef } from "react";

import { GridContainer, Columns, Rows, NodeContainer } from "./Grid_styles";
import { NodeClass } from "./node_class/node_class";
import Node from "../node_component/Node";

const Grid = () => {
  const grid = useRef([]); // useRef to avoid re-rendering everytime
  const [start_i, set_start_i] = useState(null);
  const [start_j, set_start_j] = useState(null);
  const [end_i, set_end_i] = useState(null);
  const [end_j, set_end_j] = useState(null);

  useEffect(() => {
    const w_size = Math.floor(window.innerWidth / 30);
    const h_size = Math.floor((window.innerHeight - 200) / 30);

    const create_grid = () => {
      const temporary_grid = [];
      for (let i = 0; i < w_size; i++) {
        temporary_grid[i] = [];
        for (let j = 0; j < h_size; j++) {
          if (i === 0 && j === 0) {
            temporary_grid[i][j] = new NodeClass(
              0,
              0,
              0,
              0,
              null,
              false,
              false,
              false,
              false,
              true,
              false
            );
          } else if (i === w_size - 1 && j === h_size - 1) {
            temporary_grid[i][j] = new NodeClass(
              0,
              0,
              0,
              0,
              null,
              false,
              false,
              false,
              false,
              false,
              true
            );
          } else {
            temporary_grid[i][j] = new NodeClass(
              0,
              0,
              0,
              0,
              null,
              false,
              false,
              false,
              false,
              false,
              false
            );
          }
        }
      }

      set_start_i(0);
      set_start_j(0);
      set_end_i(w_size - 1);
      set_end_j(h_size - 1);

      return temporary_grid;
    };
    grid.current = create_grid();
  }, []);

  const on_mouse_down = (i, j) => {
    if (i === start_i && j === start_j) {
      grid.current[i][j].start_node = false;
      console.log(grid.current);
    } else if (i === end_i && j === end_j) {
      grid.current[i][j].end_node = false;
    }
  };

  const on_mouse_up = (i, j) => {
    grid.current[i][j].start_node = true;
  };

  return (
    <>
      <GridContainer>
        <Columns>
          {grid.current.map((column, i) => {
            return (
              <Rows>
                {column.map((row, j) => (
                  <NodeContainer
                    onMouseDown={() => on_mouse_down(i, j)}
                    onMouseUp={() => on_mouse_up(i, j)}
                  >
                    <Node
                      start_node={grid.current[i][j].start_node}
                      end_node={grid.current[i][j].end_node}
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
