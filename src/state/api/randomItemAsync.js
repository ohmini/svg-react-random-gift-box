import {items} from '../constants/items'
import {resolveAfterMilliSeconds} from '../../utils/resolveAfterMilliSeconds'

export async function randomItemAsync(prevItem, ms) {
  let item = items[Math.floor(Math.random()*items.length)]
  if (prevItem) {
    while (prevItem.name === item.name) {
      item = items[Math.floor(Math.random()*items.length)]
    }
  }
  return await resolveAfterMilliSeconds(item, ms)
}
