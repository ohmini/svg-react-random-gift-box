import React, {Component} from 'react'
import styled from 'styled-components'
import {withHandlers} from 'recompose'

const Container = styled.g`
  cursor: pointer;
`

class ItemContainer extends Component {
  render() {
    const {ItemComponent, position, width, height, handleClick, isMoving} = this.props
    return (
      <Container>
        <ItemComponent
          handleClick={handleClick}
          x={position.x}
          y={position.y}
          width={width}
          height={height}
          isMoving={isMoving}
        />
      </Container>
    )
  }
}

const enhance = withHandlers({
  handleClick: ({index, randomItem, clickable}) => () => {
    if (clickable) {
      randomItem(index)
    }
  }
})

export default enhance(ItemContainer)
