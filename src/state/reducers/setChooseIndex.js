export const setChooseIndex = (state, action) => {
  return {
    ...state,
    chooseIndex: action.payload.index,
  }
}
