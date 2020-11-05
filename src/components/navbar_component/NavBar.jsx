import React from "react";
import { faPlay, faUndoAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
  Option,
  SquareBracket,
  FullIconsContainer,
  Icon,
} from "./NavBar_styles";

const NavBar = () => {
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
            <Option>A*</Option>
            <Option>Dijkstra</Option>
            <Option>BFS</Option>
          </Options>
        </OptionsContainer>
        <Icon icon={faPlay} play={"true"} />
        <OptionsContainer>
          <OptionsTitle>Mazes</OptionsTitle>
          <SquareBracket />
          <Options>
            <Option>Recursive Divison</Option>
            <Option>Sidewinder</Option>
          </Options>
        </OptionsContainer>
        <Icon icon={faHome} />
      </FullOptionsContainer>
      <FullIconsContainer>
        <Icon icon={faGithub} />
      </FullIconsContainer>
    </NavContainer>
  );
};

export default NavBar;
