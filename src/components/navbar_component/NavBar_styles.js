import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";

const { red, white } = colors;

const IconAnimation = keyframes`
  from {
    display: none;
    transition: opacity 0.5s ease-out;
    opacity: 0;
  } 
  to {
    opacity: 1;
    display: block;
  }
`;

const Option = css`
  width: fit-content;
  height: fit-content;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0rem 0.4rem 0rem 0.4rem;
  text-align: center;
  transition: color 150ms ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &:after {
    display: block;
    content: "";
    border-bottom: solid 2px ${red};
    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 0;
  color: ${white};
`;

export const FullTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
  padding: 0.75rem 0rem 0.75rem 1.5rem;
  font-family: "Bebas Neue", cursive;
`;

export const TopTitleContainer = styled.div`
  width: fit-content;
`;

export const BottomTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
`;

export const TitleTop = styled.div`
  width: fit-content;
  font-size: 2.1rem;
  background-color: ${red};
  font-style: italic;
  padding: 0.15rem 0.6rem 0rem 0.3rem;
  letter-spacing: 0.1px;
`;

export const TitleBottom = styled.div`
  width: fit-content;
  font-size: 1.6rem;
  background-color: ${red};
  font-style: italic;
  padding: 0rem 0.6rem 0.15rem 0.3rem;
  letter-spacing: 0.2px;
`;

export const FullOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  font-family: "Righteous", cursive;
  letter-spacing: 0.2px;
  margin: 0 auto;
`;

export const OptionsContainer = styled.div`
  width: fit-content;
  margin: 0rem 1rem 0rem 1rem;
`;

export const OptionsTitle = styled.div`
  color: ${white};
  text-align: center;
  font-size: 1.2rem;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: fit-content;
  font-weight: bold;
  color: ${white};
  padding: 0rem 0.2rem 0.2rem 0.2rem;
`;

export const Option1 = styled.div`
  ${Option};
  color: ${(props) => (props.option ? `${red}` : "")};
`;

export const Option2 = styled.div`
  ${Option};
  color: ${(props) => (props.option ? `${red}` : "")};
`;

export const Option3 = styled.div`
  ${Option};
  color: ${(props) => (props.option ? `${red}` : "")};
`;

export const Option4 = styled.div`
  ${Option};
  color: ${(props) => (props.option ? `${red}` : "")};
`;

export const Option5 = styled.div`
  ${Option};
  color: ${(props) => (props.option ? `${red}` : "")};
`;

export const SquareBracket = styled.div`
  height: 0.4rem;
  border-top: 2px solid ${white};
  border-right: 2px solid ${white};
  border-left: 2px solid ${white};
  margin: 0.2rem 0rem 0.1rem 0rem;
`;

export const FullIconsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0rem 1rem 0rem 1rem;
  right: 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: ${(props) => (props.restart ? "1.9rem" : "2rem")};
  margin: 0rem 2rem 0rem 2rem;
  animation: ${(props) =>
    props.restart
      ? css`
          ${IconAnimation} 0.5s linear
        `
      : "none"};
  color: ${white};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
