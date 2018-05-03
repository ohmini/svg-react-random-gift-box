import {Items} from '../components/items'

export const setItem = (item) => {
  if (!item) return Items.Box
  switch (item.name) {
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
