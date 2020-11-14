import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import {
  faPlay,
  faUndoAlt,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  selected_pathfinding_algorithm_action,
  selected_maze_algorithm_action,
  selected_pathfinding_algorithm_active_action,
  selected_maze_algorithm_active_action,
  no_possible_path_message_action,
  restart_grid_active_action,
} from "../../redux/global_actions";

import {
  NavContainer,
  FullTitleContainer,
  TopTitleContainer,
  BottomTitleContainer,
  TitleTop,
  TitleBottom,
  FullOptionsContainer,
  OptionsContainer,
  OptionsTitle,
  Options,
  Option1,
  Option2,
  Option3,
  Option4,
  Option5,
  SquareBracket,
  FullIconsContainer,
  Icon,
  Tooltip,
  NoPathMsg,
} from "./NavBar_styles";

const NavBar = ({
  selected_pathfinding_algorithm,
  selected_pathfinding_algorithm_active,
  selected_maze_algorithm_active,
  selected_pathfinding_algorithm_on_grid,
  selected_maze_algorithm_on_grid,
  selected_pathfinding_algorithm_fun,
  selected_maze_algorithm_fun,
  selected_pathfinding_algorithm_active_fun,
  selected_maze_algorithm_active_fun,
  obstacles_on_grid,
  restart_grid_icon,
  restart_grid_active,
  restart_grid,
  display_tutorial,
  no_possible_path_message,
  no_possible_path,
}) => {
  // states
  const [option_1, set_option_1] = useState(false);
  const [option_2, set_option_2] = useState(false);
  const [option_3, set_option_3] = useState(false);
  const [option_4, set_option_4] = useState(false);
  const [option_5, set_option_5] = useState(false);
  const [play_msg, set_play_msg] = useState("Visualize");
  // refs
  const path_msg = useRef(false);

  useEffect(() => {
    if (no_possible_path) {
      no_possible_path_message();
      path_msg.current = true;
    }
  });

  // PATHFINDING ALGORITHM
  const run_pathfinding_algorithm = () => {
    if (!selected_pathfinding_algorithm) {
      set_play_msg("Pick one first");
      return;
    }
    if (
      selected_pathfinding_algorithm_active ||
      selected_pathfinding_algorithm_on_grid
    )
      return;
    selected_pathfinding_algorithm_active_fun();
    set_play_msg("Visualize");
  };

  // MAZE ALGORITHM
  const run_maze_algorithm = (maze, set_option) => {
    let time = 0;
    if (
      selected_maze_algorithm_active ||
      selected_maze_algorithm_on_grid ||
      selected_pathfinding_algorithm_on_grid ||
      selected_pathfinding_algorithm_active
    )
      return;
    if (obstacles_on_grid) {
      time = 1000;
      run_restart_grid(); // removing all obstacles of grid to run maze
    }

    setTimeout(() => {
      set_option_4(false); // reset all div colors
      set_option_5(false); // reset all div colors
      set_option(true); // assign color to active algorithm only
      selected_maze_algorithm_fun(maze); // update maze algorithm on redux
      selected_maze_algorithm_active_fun();
    }, time);
  };

  const update_pathfinding_algorithm = (algorithm, set_option) => {
    if (
      selected_pathfinding_algorithm_active ||
      selected_pathfinding_algorithm_on_grid ||
      selected_maze_algorithm_active
    )
      return;
    set_option_1(false); // reset all div colors
    set_option_2(false); // reset all div colors
    set_option_3(false); // reset all div colors
    set_option(true); // assign color to active algorithm only
    selected_pathfinding_algorithm_fun(algorithm); // update pathfinding algorithm on redux
  };

  const run_restart_grid = () => {
    restart_grid();
    restart_grid_active();
    set_option_1(false);
    set_option_2(false);
    set_option_3(false);
    set_option_4(false);
    set_option_5(false);
    path_msg.current = false;
  };

  return (
    <>
      <NavContainer>
        <FullTitleContainer>
          <TopTitleContainer>
            <TitleTop>Pathfinding</TitleTop>
          </TopTitleContainer>
          <BottomTitleContainer>
            <TitleBottom>Visualizer</TitleBottom>
          </BottomTitleContainer>
        </FullTitleContainer>
        <FullOptionsContainer>
          <OptionsContainer>
            <OptionsTitle>Algorithms</OptionsTitle>
            <SquareBracket />
            <Options>
              <Option1
                option={option_1}
                onClick={() =>
                  update_pathfinding_algorithm(
                    "RUN_A_STAR_ALGORITHM",
                    set_option_1
                  )
                }
              >
                A*
              </Option1>
              <Option2
                option={option_2}
                onClick={() =>
                  update_pathfinding_algorithm("DIJKSTRA", set_option_2)
                }
              >
                Dijkstra
              </Option2>
              <Option3
                option={option_3}
                onClick={() =>
                  update_pathfinding_algorithm(
                    "RUN_BFS_ALGORITHM",
                    set_option_3
                  )
                }
              >
                BFS
              </Option3>
            </Options>
          </OptionsContainer>
          <Tooltip data={restart_grid_icon ? "Restart" : play_msg}>
            <Icon
              icon={restart_grid_icon ? faUndoAlt : faPlay}
              restart={restart_grid_icon ? true : false}
              onClick={
                restart_grid_icon
                  ? () => run_restart_grid()
                  : () => run_pathfinding_algorithm()
              }
            />
          </Tooltip>
          <OptionsContainer>
            <OptionsTitle>Mazes</OptionsTitle>
            <SquareBracket />
            <Options>
              <Option4
                option={option_4}
                onClick={() =>
                  run_maze_algorithm(
                    "RUN_RECURSIVE_DIVISION_ALGORITHM",
                    set_option_4
                  )
                }
              >
                Recursive Divison
              </Option4>
              <Option5
                option={option_5}
                onClick={() =>
                  run_maze_algorithm("RUN_SIDEWINDER_ALGORITHM", set_option_5)
                }
              >
                Sidewinder
              </Option5>
            </Options>
          </OptionsContainer>
          <Tooltip data={"Tutorial"}>
            <Icon icon={faQuestionCircle} onClick={() => display_tutorial()} />
          </Tooltip>
        </FullOptionsContainer>
        <FullIconsContainer>
          <Tooltip data={"Repository"}>
            <a href={"https://github.com/javierontbla/path"} target="_blank">
              <Icon icon={faGithub} />
            </a>
          </Tooltip>
        </FullIconsContainer>
      </NavContainer>
      <NoPathMsg msg={path_msg.current}>
        Restart, there is no possible path
      </NoPathMsg>
    </>
  );
};

const mapStateToProps = ({
  global_reducer: {
    selected_pathfinding_algorithm,
    selected_pathfinding_algorithm_active,
    selected_maze_algorithm_active,
    selected_pathfinding_algorithm_on_grid,
    selected_maze_algorithm_on_grid,
    obstacles_on_grid,
    no_possible_path,
    restart_grid_icon,
  },
}) => ({
  selected_pathfinding_algorithm,
  selected_pathfinding_algorithm_active,
  selected_maze_algorithm_active,
  selected_pathfinding_algorithm_on_grid,
  selected_maze_algorithm_on_grid,
  obstacles_on_grid,
  no_possible_path,
  restart_grid_icon,
});

const mapDispatchToProps = (dispatch) => ({
  selected_pathfinding_algorithm_fun: (algorithm) =>
    dispatch(selected_pathfinding_algorithm_action(algorithm)),
  selected_maze_algorithm_fun: (maze) =>
    dispatch(selected_maze_algorithm_action(maze)),
  selected_pathfinding_algorithm_active_fun: () =>
    dispatch(selected_pathfinding_algorithm_active_action()),
  selected_maze_algorithm_active_fun: () =>
    dispatch(selected_maze_algorithm_active_action()),
  no_possible_path_message: () => dispatch(no_possible_path_message_action()),
  restart_grid_active: () => dispatch(restart_grid_active_action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
