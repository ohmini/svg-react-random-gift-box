import {items} from '../constants/items'

export async function randomItemAsync(prevItem, ms) {
  let item = items[Math.floor(Math.random()*items.length)]
  if (prevItem) {
    while (prevItem.name === item.name) {
      item = items[Math.floor(Math.random()*items.length)]
    }
  }
  return await resolveAfterSeconds(item, ms)
}

function resolveAfterSeconds(item, ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(item)
    }, ms)
  })
}
