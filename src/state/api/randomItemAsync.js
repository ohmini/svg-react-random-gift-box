import {items} from '../constants/items'

export async function randomItemAsync() {
  const item = items[Math.floor(Math.random()*items.length)]
  return await resolveAfterSeconds(item, 2)
}

function resolveAfterSeconds(item, seconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(item)
    }, seconds * 1000)
  })
}
