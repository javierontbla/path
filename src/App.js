import React, { useState } from "react";

import { GlobalStyles } from "./App_styles";
import NavBar from "./components/navbar_component/NavBar";
import Grid from "./components/grid_component/Grid";

const App = () => {
  const [selected_algorithm, set_selected_algorithm] = useState(null);

  const select_algorithm = (algorithm) => {
    set_selected_algorithm(algorithm);
  };

  return (
    <>
      <GlobalStyles />
      <NavBar select_algorithm={select_algorithm} />
      <Grid selected_algorithm={selected_algorithm} />
    </>
  );
};

export default App;
