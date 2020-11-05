import React from "react";

import { NodeContainer } from "./Node_styles";

const Node = ({ start_node, end_node }) => {
  if (start_node) console.log("START PASSING");
  return <NodeContainer start_node={start_node} end_node={end_node} />;
};

export default Node;
