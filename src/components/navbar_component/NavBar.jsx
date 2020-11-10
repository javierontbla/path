import React, { useState } from "react";
import { connect } from "react-redux";
import {
  faPlay,
  faUndoAlt,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  set_active_algorithm_action,
  set_active_maze_action,
  start_algorithm_animation_action,
  restart_grid_action,
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
} from "./NavBar_styles";

const NavBar = ({
  set_active_algorithm,
  set_active_maze,
  active_algorithm,
  active_maze,
  active_algorithm_on_grid,
  active_maze_on_grid,
  start_algorithm_animation,
  restart_grid_function,
  restart_grid,
}) => {
  const [option_1, set_option_1] = useState(false);
  const [option_2, set_option_2] = useState(false);
  const [option_3, set_option_3] = useState(false);
  const [option_4, set_option_4] = useState(false);
  const [option_5, set_option_5] = useState(false);

  const update_active_algorithm_animation = () => {
    if (!active_algorithm) return;
    if (active_algorithm_on_grid) return;
    start_algorithm_animation();
  };

  const update_active_algorithm = (algorithm, set_option, option) => {
    if (active_algorithm) return;
    set_active_algorithm(algorithm);
    // reset all div colors
    set_option_1(false);
    set_option_2(false);
    set_option_3(false);
    // assign color to active algorithm only
    set_option(option);
  };

  const update_active_maze = (maze, set_option) => {
    if (active_maze) return;
    if (active_maze_on_grid) return;
    set_option_4(false);
    set_option_5(false);
    set_option(true);
    set_active_maze(maze);
  };

  const update_restart_grid = () => {
    restart_grid_function();
  };

  return (
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
                update_active_algorithm(
                  "RUN_A_STAR_ALGORITHM",
                  set_option_1,
                  true
                )
              }
            >
              A*
            </Option1>
            <Option2
              option={option_2}
              onClick={() =>
                update_active_algorithm("DIJKSTRA", set_option_2, true)
              }
            >
              Dijkstra
            </Option2>
            <Option3
              option={option_3}
              onClick={() =>
                update_active_algorithm("RUN_BFS_ALGORITHM", set_option_3, true)
              }
            >
              BFS
            </Option3>
          </Options>
        </OptionsContainer>
        <Icon
          icon={restart_grid ? faUndoAlt : faPlay}
          restart={restart_grid ? true : false}
          onClick={
            restart_grid
              ? () => update_restart_grid()
              : () => update_active_algorithm_animation()
          }
        />
        <OptionsContainer>
          <OptionsTitle>Mazes</OptionsTitle>
          <SquareBracket />
          <Options>
            <Option4
              option={option_4}
              onClick={() =>
                update_active_maze(
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
                update_active_maze("RUN_SIDEWINDER_ALGORITHM", set_option_5)
              }
            >
              Sidewinder
            </Option5>
          </Options>
        </OptionsContainer>
        <Icon icon={faQuestionCircle} />
      </FullOptionsContainer>
      <FullIconsContainer>
        <a href={"https://github.com/javierontbla/path"} target="_blank">
          <Icon icon={faGithub} />
        </a>
      </FullIconsContainer>
    </NavContainer>
  );
};

const mapStateToProps = ({
  global_reducer: {
    active_algorithm,
    active_maze,
    active_algorithm_on_grid,
    active_maze_on_grid,
    restart_grid,
  },
}) => ({
  active_algorithm,
  active_maze,
  active_algorithm_on_grid,
  active_maze_on_grid,
  restart_grid,
});

const mapDispatchToProps = (dispatch) => ({
  set_active_algorithm: (algorithm) =>
    dispatch(set_active_algorithm_action(algorithm)),
  set_active_maze: (maze) => dispatch(set_active_maze_action(maze)),
  start_algorithm_animation: () => dispatch(start_algorithm_animation_action()),
  restart_grid_function: () => dispatch(restart_grid_action()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
