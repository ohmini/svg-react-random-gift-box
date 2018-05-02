import {items} from '../constants/items'

export const randomItem = () => {
  const item = items[Math.floor(Math.random()*items.length)]
  return item.name
}
