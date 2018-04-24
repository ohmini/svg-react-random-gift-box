import {Items} from '../components/items'

export const setItem = (item) => {
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
