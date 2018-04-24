export const setItem = (state, action) => {
  return {
    ...state,
    item: {
      name: action.payload.item,
      index: action.payload.index,
    },
  }
}
