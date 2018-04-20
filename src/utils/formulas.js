export const items = [
  { name: "basketball", rate: 0.25, },
  { name: "car", rate: 0.05, },
  { name: "donut", rate: 0.35, },
  { name: "iphone", rate: 0.1, },
  { name: "shoes", rate: 0.25, },
]

export const randomItems = () => {
  const item = items[Math.floor(Math.random()*items.length)]
  return item.name
}
