import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.g`
  cursor: pointer;
`

class ItemContainer extends Component {
  render() {
    const {ItemComponent, position, width, height, isMoving} = this.props
    return (
      <Container>
        <ItemComponent
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


export default ItemContainer
