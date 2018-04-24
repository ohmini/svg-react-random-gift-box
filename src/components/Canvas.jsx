import React from 'react'

import Sky from './Sky'
import {Items} from './items'
import Room from './Room'

const setItem = (item) => {
  switch (item) {
    case 'gift':
      return Items.Box
    case 'basketball':
      return Items.BasketBall
    case 'car':
      return Items.Car
    case 'donut':
      return Items.Donut
    case 'shoes':
      return Items.Shoes
    case 'iphone':
      return Items.Iphone
    default:
      return Items.Box
  }
}

const Canvas = (props) => {
  const {handleClick, item} = props
  const ItemComponent = setItem(item)
  return (
    <svg
      id="gift-box-canvas"
      x="0px" y="0px"
      width="841.89px" height="595.28px" viewBox="0 0 841.89 595.28"
    >
      <Sky />
      <Room />
      <ItemComponent handleClick={handleClick} x="400px" y="300px" width="200px" height="200px"/>
    </svg>
  )
}

export default Canvas
