// neighbors generation for each node
export const create_neighbors = (i, j, columns, rows, grid, maze) => {
  let neighbors = [];
  // adding the neighboors to each individual node
  // and those get stored in the object node
  // managing edges with if statements
  if (j < rows - 1) neighbors.push(grid[i][j + 1]);
  if (i < columns - 1) neighbors.push(grid[i + 1][j]);

  if (!maze) {
    if (j > 0) neighbors.push(grid[i][j - 1]);
    if (i > 0) neighbors.push(grid[i - 1][j]);
    if (i < columns - 1 && j < rows - 1) neighbors.push(grid[i + 1][j + 1]);
    if (i > 0 && j < rows - 1) neighbors.push(grid[i - 1][j + 1]);
    if (i > 0 && j > 0) neighbors.push(grid[i - 1][j - 1]);
    if (i < columns - 1 && j > 0) neighbors.push(grid[i + 1][j - 1]);
  }

  return neighbors;
};
