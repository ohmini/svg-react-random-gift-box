export const setDisplay = (state, action) => {
  return {
    ...state,
    display: action.payload.display,
  }
};
