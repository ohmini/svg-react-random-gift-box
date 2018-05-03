import React from 'react'

import Sky from './Sky'
import Room from './Room'
import ItemContainer from './ItemContainer'
import SmallGiftBox from './SmallGiftBox'

import {createGrid} from '../utils/createGrid'
import {makeGridSize} from '../utils/makeGridSize'
import {setItem} from '../utils/setItem'

const Canvas = (props) => {
  const {item, windowWidth, windowHeight, randomItem, chooseIndex, clickable, display, setDisplay} = props
  const ItemComponent = setItem('gift')
  let RewardComponent = ItemComponent
  if (item) {
    RewardComponent = setItem(item.name)
  }
  const gridSize = makeGridSize(windowWidth, windowHeight, 3, 3)
  const grids = createGrid(gridSize, 3, 3)
  const smallGiftBoxPosition = {
  x: (windowWidth/2)-(windowWidth/2.5),
  y: (windowHeight*0.85)
}
  return (
    <svg
      id="gift-box-canvas"
      x="0px" y="0px"
      viewBox={`0 0 ${windowWidth} ${windowHeight}`}
    >
      <Room windowWidth={windowWidth} windowHeight={windowHeight} />
      <SmallGiftBox setDisplay={setDisplay} position={smallGiftBoxPosition} width={50} height={50} isMoving={!item} />

      { display &&
        <g>
          <Sky />
        </g>

      }
    </svg>
  )
}

function isMoving(chooseIndex, index) {
  if (!chooseIndex) return false
  return (chooseIndex === index) ? true: false
}

function isRewardComponent(index, item, GiftComponent, RewardComponent){
  if (!item) return GiftComponent
  return (index === item.index) ? RewardComponent: GiftComponent
}

export default Canvas
