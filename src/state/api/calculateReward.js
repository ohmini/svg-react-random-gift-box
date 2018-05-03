
export const calculateReward = (items) => {
  const totalRatio = items.map(i => i.ratio).reduce((total, ratio) => {
    return total + ratio
  })
  let total = 0
  const randomRanges = items.map(i => {
    const maxRange = total+(i.ratio*100)
    const minRange = total+1
    total = maxRange
    return {
      name: i.name,
      min: minRange,
      max: maxRange,
    }
  })
  const randomIndex = Math.floor(Math.random()*totalRatio*100)
  const item = getRandomItemByIndex(randomIndex, randomRanges)
  return item
}

function getRandomItemByIndex(index, randomRanges) {
  const item = randomRanges.find(range => {
    return (range.min <= index) && (index <= range.max)
  })
  return item
}
