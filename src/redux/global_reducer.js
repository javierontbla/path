import { global_types } from "./global_types";

const INITIAL_STATE = {
  selected_pathfinding_algorithm: null,
  selected_maze_algorithm: null,
  selected_pathfinding_algorithm_active: false,
  selected_maze_algorithm_active: false,
  selected_pathfinding_algorithm_on_grid: false,
  selected_maze_algorithm_on_grid: false,
  obstacles_on_grid: false,
  no_possible_path: false,
  restart_grid_icon: false,
};

export const global_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case global_types.SELECT_PATHFINDING_ALGORITHM:
      return {
        ...state,
        selected_pathfinding_algorithm: action.payload,
      };
    case global_types.SELECT_MAZE_ALGORITHM:
      return {
        ...state,
        selected_maze_algorithm: action.payload,
      };
    case global_types.SELECTED_PATHFINDING_ALGORITHM_ACTIVE:
      return {
        ...state,
        selected_pathfinding_algorithm_active: true,
      };

    case global_types.SELECTED_MAZE_ALGORITHM_ACTIVE:
      return {
        ...state,
        selected_maze_algorithm_active: true,
      };

    case global_types.SELECTED_PATHFINDING_ALGORITHM_ON_GRID:
      return {
        ...state,
        selected_pathfinding_algorithm_active: false,
        selected_pathfinding_algorithm_on_grid: true,
        restart_grid_icon: true,
      };
    case global_types.SELECTED_MAZE_ALGORITHM_ON_GRID:
      return {
        ...state,
        selected_maze_algorithm_active: false,
        selected_maze_algorithm_on_grid: true,
      };
    case global_types.RESTART_GRID_ACTIVE:
      return {
        ...state,
        selected_pathfinding_algorithm: null,
        selected_maze_algorithm: null,
        selected_pathfinding_algorithm_active: false,
        selected_maze_algorithm_active: false,
        selected_pathfinding_algorithm_on_grid: false,
        selected_maze_algorithm_on_grid: false,
        obstacles_on_grid: false,
        no_possible_path: false,
        restart_grid_icon: false,
      };
    case global_types.OBSTACLES_ON_GRID:
      return {
        ...state,
        obstacles_on_grid: true,
      };

    case global_types.NO_POSSIBLE_PATH_MESSAGE:
      return {
        ...state,
        restart_grid_icon: true,
      };

    case global_types.NO_POSSIBLE_PATH:
      return {
        ...state,
        no_possible_path: true,
      };
    default:
      return state;
  }
};
