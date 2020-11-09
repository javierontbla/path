import React from "react";

import "./Node_styles.css";

const Node = ({ column, row, start_node, end_node }) => {
  return (
    <div
      className={`node_${start_node ? `start` : ``}${end_node ? `end` : ``}`}
      id={`node_${column}_${row}`}
    ></div>
  );
};

export default Node;
