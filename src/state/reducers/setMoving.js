export const setMoving = (state, action) => {
  return {
    ...state,
    isMoving: action.payload.isMoving,
  }
};
