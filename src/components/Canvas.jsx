import React from 'react'

import Sky from './Sky'
import Room from './Room'
import ItemContainer from './ItemContainer'

import {createGrid} from '../utils/createGrid'
import {makeGridSize} from '../utils/makeGridSize'
import {setItem} from '../utils/setItem'

const Canvas = (props) => {
  const {item, windowWidth, windowHeight, randomItem, chooseIndex, clickable} = props
  const ItemComponent = setItem('gift')
  let RewardComponent = ItemComponent
  if (item) {
    RewardComponent = setItem(item.name)
  }
  const gridSize = makeGridSize(windowWidth, windowHeight, 3, 3)
  const grids = createGrid(gridSize, 3, 3)
  return (
    <svg
      id="gift-box-canvas"
      x="0px" y="0px"
      viewBox={`0 0 ${windowWidth} ${windowHeight}`}
    >
      <Sky />
      <Room windowWidth={windowWidth} windowHeight={windowHeight} />
      {
        grids.map((grid, index) => {
          return (
              <ItemContainer
                randomItem={randomItem}
                clickable={clickable}
                key={index}
                index={index}
                grid={grid}
                ItemComponent={isRewardComponent(index, item, ItemComponent, RewardComponent)}
                isMoving={isMoving(chooseIndex, index)}
              />
          )
        })
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
