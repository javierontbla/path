import React, { useState } from "react";

import {
  GlobalStyles,
  TutorialBackground,
  TutorialBlock,
  TitleBlock,
  Title,
  Description,
  Icon,
  Text,
  Instructions,
  SmallText,
} from "./App_styles";
import NavBar from "./components/navbar_component/NavBar";
import Grid from "./components/grid_component/Grid";

const App = () => {
  const [selected_algorithm, set_selected_algorithm] = useState(null);
  const [tutorial, set_tutorial] = useState(false);
  const [grid_key, set_grid_key] = useState(1);

  const select_algorithm = (algorithm) => {
    set_selected_algorithm(algorithm);
  };

  const restart_grid = () => {
    set_grid_key(grid_key + 1);
  };

  const display_tutorial = () => {
    set_tutorial(!tutorial);
  };

  return (
    <>
      <GlobalStyles />
      <TutorialBackground
        tutorial={tutorial}
        onClick={() => display_tutorial()}
      >
        <TutorialBlock>
          <TitleBlock>
            <Title>Instructions</Title>
          </TitleBlock>
          <Instructions>
            Welcome to the Pathfinding Visualizer, fill the grid with obstacles
            (pressing down your mouse over the grid) or choose a Maze Algorithm
            to do it for you. Then pick a searching algorithm (left side) and
            click the Play button (in the middle) to visualize it. Note: The
            algorithm will always find the closest path between the two red
            nodes.
          </Instructions>
          <TitleBlock>
            <Title>Legend</Title>
          </TitleBlock>
          <Description>
            <Icon path={"true"} />
            <Text>
              Start/End Node{" "}
              <SmallText>
                - (Move them by pressing down and displacing your mouse)
              </SmallText>
            </Text>
          </Description>
          <Description>
            <Icon obstacle={"true"} />
            <Text>Obstacle/Maze Node</Text>
          </Description>
          <Description>
            <Icon visited={"true"} />
            <Text>Visited Node</Text>
          </Description>
          <Description>
            <Icon path={"true"} />
            <Text>Final Path</Text>
          </Description>
        </TutorialBlock>
      </TutorialBackground>
      <NavBar
        restart_grid={() => restart_grid()}
        select_algorithm={select_algorithm}
        display_tutorial={() => display_tutorial()}
      />
      <Grid key={grid_key} selected_algorithm={selected_algorithm} />
    </>
  );
};

export default App;
