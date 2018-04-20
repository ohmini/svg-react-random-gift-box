import React from 'react'

const Sky = () => {
  const skyStyle = {
    fill: '#30abef',
  }
  const skyWidth = 5000
  const gameHeight = 1200
  return (
    <rect
      style={skyStyle}
      x={skyWidth / -2}
      y={0}
      width={skyWidth}
      height={gameHeight}
    />
  )
}

export default Sky
