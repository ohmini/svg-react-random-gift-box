export const createGrid = (gridSize, rows, columns) => {
  const grids = []
  let x=0
  let y=0
  for (let i=0; i<rows; i++) {
    for (let j=0; j<columns; j++) {
      const grid = {
        x: x,
        y: y,
        width: gridSize.width,
        height: gridSize.height,
      }
      grids.push(grid)
      x += gridSize.width
    }
    x = 0
    y += gridSize.height
  }
  return grids
}
