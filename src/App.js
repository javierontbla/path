import React, { useState } from "react";

import { GlobalStyles } from "./App_styles";
import NavBar from "./components/navbar_component/NavBar";
import Grid from "./components/grid_component/Grid";

const App = () => {
  const [selected_algorithm, set_selected_algorithm] = useState(null);
  const [grid_key, set_grid_key] = useState(1);

  const select_algorithm = (algorithm) => {
    set_selected_algorithm(algorithm);
  };

  const restart_grid = () => {
    set_grid_key(grid_key + 1);
  };

  return (
    <>
      <GlobalStyles />
      <NavBar
        restart_grid={() => restart_grid()}
        select_algorithm={select_algorithm}
      />
      <Grid key={grid_key} selected_algorithm={selected_algorithm} />
    </>
  );
};

export default App;
