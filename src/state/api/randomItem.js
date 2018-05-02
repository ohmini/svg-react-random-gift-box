const items = [
  { name: "basketball", quantity: 2 },
  { name: "car", quantity: 1, },
  { name: "donut", quantity: 3, },
  { name: "iphone", quantity: 1, },
  { name: "shoes", quantity: 2, },
]

export const randomItem = () => {
  const item = items[Math.floor(Math.random()*items.length)]
  return item.name
}

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
