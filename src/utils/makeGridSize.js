export const makeGridSize = (windowWidth, windowHeight, rows, columns) => {
  const width = windowWidth/columns
  const height = windowHeight/rows
  return {
    width,
    height,
  }
}
