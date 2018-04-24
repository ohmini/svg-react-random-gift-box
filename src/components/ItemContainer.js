import React, {Component} from 'react'
import {withHandlers} from 'recompose'

class ItemContainer extends Component {
  render() {
    const {ItemComponent, grid, handleClick} = this.props
    return (
      <g>
        <ItemComponent
          handleClick={handleClick}
          x={grid.x}
          y={grid.y}
          width={grid.width}
          height={grid.height}
        />
      </g>
    )
  }
}

const enhance = withHandlers({
  handleClick: ({index, randomItem}) => () => {
    randomItem(index)
  }
})

export default enhance(ItemContainer)
