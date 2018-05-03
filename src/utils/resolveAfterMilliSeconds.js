export async function resolveAfterMilliSeconds(item, ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(item)
    }, ms)
  })
}
