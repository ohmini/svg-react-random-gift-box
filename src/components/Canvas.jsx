import React from 'react'

import Sky from './Sky'
import Box from './Box'
import BasketBall from './BasketBall'
import Car from './Car'
import Donut from './Donut'
import IPhone from './Iphone'
import Shoes from './Shoes'
import Room from './Room'

const setItem = (item) => {
  switch (item) {
    case 'gift':
      return Box
    case 'basketball':
      return BasketBall
    case 'car':
      return Car
    case 'donut':
      return Donut
    case 'shoes':
      return Shoes
    case 'iphone':
      return IPhone
    default:
      return Box
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
