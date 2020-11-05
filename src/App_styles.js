import styled, { createGlobalStyle } from "styled-components";

import { colors } from "./colors/colors";

const { black } = colors;

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${black};
        padding: 0rem;
        margin: 0.2rem;
    }
`;
