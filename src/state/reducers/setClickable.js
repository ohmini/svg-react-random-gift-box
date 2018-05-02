export const setClickable = (state, action) => {
  return {
    ...state,
    clickable: action.payload.clickable,
  }
}
