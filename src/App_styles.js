import styled, { createGlobalStyle } from "styled-components";

import { colors } from "./colors/colors";

const { black, white, red, green } = colors;

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${black};
        padding: 0rem;
        margin: 0.2rem;
    }
`;

export const TutorialBackground = styled.div`
  display: ${(props) => (props.tutorial ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  z-index: 1;
`;

export const TutorialBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${black};
  width: 50vw;
  height: fit-content;
  z-index: 2;
  font-family: "Righteous", cursive;
  letter-spacing: 0.2px;
  font-size: 1.2rem;
  padding: 0.8rem;
  color: ${white};
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0rem 0.2rem 0.2rem 0.2rem;
`;

export const Title = styled.div`
  font-size: 2.4rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.div`
  color: ${white};
`;

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) =>
    props.obstacle ? `${white}` : props.visited ? `${green}` : `${red}`};
  margin: 0.6rem 1rem 0.6rem 0.6rem;
`;

export const Instructions = styled.div`
  margin: 0rem 0.2rem 0.2rem 0.2rem;
  text-align: justify;
  font-size: 1.2rem;
  line-height: 150%;
`;

export const SmallText = styled.span`
  font-size: 0.8rem;
`;
