export const setItem = (state, action) => {
  return {
    ...state,
    item: action.payload.item,
  }
}
