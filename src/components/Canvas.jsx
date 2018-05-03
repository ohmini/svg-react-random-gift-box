import React from 'react'

import Sky from './Sky'
import Room from './Room'
import ItemContainer from './ItemContainer'
import GiftButton from './GiftButton'

import {createGrid} from '../utils/createGrid'
import {makeGridSize} from '../utils/makeGridSize'
import {setItem} from '../utils/setItem'

const Canvas = (props) => {
  const {item, windowWidth, windowHeight, randomItem, pickReward, chooseIndex, clickable, display, isMoving, setDisplay} = props
  const ItemComponent = setItem('gift')
  let RewardComponent = ItemComponent
  if (item) {
    RewardComponent = setItem(item.name)
  }
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
        ItemComponent={RewardComponent}
        isMoving={false}
        height={itemHeight}
        width={itemWidth}
      />
      <GiftButton randomItem={randomItem} pickReward={pickReward} position={btnPosition} width={btnWidth} height={btnHeight} isMoving={isMoving}/>
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
