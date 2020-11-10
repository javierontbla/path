import { global_types } from "./global_types";

export const set_active_algorithm_action = (algorithm) => ({
  type: global_types.SET_ACTIVE_ALGORITHM,
  payload: algorithm,
});

export const set_active_maze_action = (maze) => ({
  type: global_types.SET_ACTIVE_MAZE,
  payload: maze,
});

export const start_algorithm_animation_action = () => ({
  type: global_types.START_ALGORITHM_ANIMATION,
});

export const end_algorithm_animation_action = () => ({
  type: global_types.END_ALGORITHM_ANIMATION,
});

export const end_maze_animation_action = () => ({
  type: global_types.END_MAZE_ANIMATION,
});

export const restart_grid_action = () => ({
  type: global_types.RESTART_GRID,
});
