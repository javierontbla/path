import { global_types } from "./global_types";

export const selected_pathfinding_algorithm_action = (algorithm) => ({
  type: global_types.SELECT_PATHFINDING_ALGORITHM,
  payload: algorithm,
});

export const selected_maze_algorithm_action = (maze) => ({
  type: global_types.SELECT_MAZE_ALGORITHM,
  payload: maze,
});

export const selected_pathfinding_algorithm_active_action = () => ({
  type: global_types.SELECTED_PATHFINDING_ALGORITHM_ACTIVE,
});

export const selected_maze_algorithm_active_action = () => ({
  type: global_types.SELECTED_MAZE_ALGORITHM_ACTIVE,
});

export const selected_pathfinding_algorithm_on_grid_action = () => ({
  type: global_types.SELECTED_PATHFINDING_ALGORITHM_ON_GRID,
});

export const selected_maze_algorithm_on_grid_action = () => ({
  type: global_types.SELECTED_MAZE_ALGORITHM_ON_GRID,
});

export const restart_grid_active_action = () => ({
  type: global_types.RESTART_GRID_ACTIVE,
});
