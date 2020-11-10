// Sidewinder Algorithm

export const sidewinder_algorithm = (grid, cols, rows) => {
  let maze = [];
  let run_set = [];

  for (let i = 1; i < cols - 1; i += 2) {
    for (let j = 1; j < rows - 1; j += 2) {
      const random = Math.floor(Math.random() * 10 + 1);

      run_set.push(grid[i][j]);

      if (j < rows - 1 && random % 2 === 0) {
        maze.push(grid[i][j]);
        maze.push(grid[i][j + 1]);
      } else {
        const element = run_set[Math.floor(Math.random() * run_set.length)];
        // current
        maze.push(grid[element.i][element.j]);
        // neighbor
        maze.push(grid[element.i + 1][element.j]);
      }
      run_set = [];
    }
  }

  return maze;
};
