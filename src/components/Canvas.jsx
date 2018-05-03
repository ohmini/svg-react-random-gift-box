import React from 'react'
import styled from 'styled-components'

import Sky from './Sky'
import ItemContainer from './ItemContainer'
import GiftButton from './GiftButton'

import {setItem} from '../utils/setItem'

const Container = styled.g`
  cursor: pointer;
`

const Canvas = (props) => {
  const {item, windowWidth, windowHeight, randomItem, pickReward, clickable, isMoving} = props
  const ItemComponent = setItem(item)

  const itemWidth= 200
  const itemHeight= 200
  const itemPosition = {
    x: (windowWidth/2)-(itemWidth/2) ,
    y: (windowHeight*0.35)-(itemHeight/3) ,
  }
  const btnWidth= 80
  const btnHeight= 80
  const btnPosition = {
    x: (windowWidth/2)-(btnWidth/2) ,
    y: (windowHeight/1.5)-(btnHeight/3) ,
  }
  return (
    <svg
      id="gift-box-canvas"
      x="0px" y="0px"
      viewBox={`0 0 ${windowWidth} ${windowHeight}`}
    >
      <Sky />
      <ItemContainer
        position={itemPosition}
        ItemComponent={ItemComponent}
        height={itemHeight}
        width={itemWidth}
      />
      <Container>
        <GiftButton clickable={clickable} randomItem={randomItem} pickReward={pickReward} position={btnPosition} width={btnWidth} height={btnHeight} isMoving={isMoving}/>
      </Container>
    </svg>
  )
}

export default Canvas
