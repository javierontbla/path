import { global_types } from "./global_types";

const INITIAL_STATE = {
  active_algorithm: null,
  active_algorithm_on_grid: false,
  active_maze: null,
  active_maze_on_grid: false,
  play_algorithm_animation: false,
  restart_grid: false,
};

export const global_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case global_types.SET_ACTIVE_ALGORITHM:
      return {
        ...state,
        active_algorithm: action.payload,
      };
    case global_types.SET_ACTIVE_MAZE:
      return {
        ...state,
        active_maze: action.payload,
      };
    case global_types.START_ALGORITHM_ANIMATION:
      return {
        ...state,
        play_algorithm_animation: true,
      };
    case global_types.END_ALGORITHM_ANIMATION:
      return {
        ...state,
        play_algorithm_animation: false,
        active_algorithm_on_grid: true,
        restart_grid: true,
      };
    case global_types.END_MAZE_ANIMATION:
      return {
        ...state,
        active_maze: null,
        active_maze_on_grid: true,
      };

    case global_types.RESTART_GRID:
      return {
        active_algorithm: null,
        active_algorithm_on_grid: false,
        active_maze: null,
        active_maze_on_grid: false,
        play_algorithm_animation: false,
        restart_grid: false,
      };
    default:
      return state;
  }
};
