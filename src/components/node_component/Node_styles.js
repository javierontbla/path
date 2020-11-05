import styled from "styled-components";

import { colors } from "../../colors/colors";

const { white } = colors;

export const NodeContainer = styled.div`
  width: 28px;
  padding-top: 100%;
  border: 1px solid ${white};
  background-color: ${(props) =>
    props.start_node ? "green" : props.end_node ? "pink" : ""};

  &:hover {
    background-color: ${white};
  }

  &:hover {
    cursor: pointer;
  }
`;
