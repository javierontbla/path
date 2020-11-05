import React from "react";

import { GlobalStyles } from "./App_styles";
import NavBar from "./components/navbar_component/NavBar";
import Grid from "./components/grid_component/Grid";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Grid />
    </>
  );
};

export default App;
