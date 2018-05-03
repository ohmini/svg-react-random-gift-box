import {types} from './'

export const setMoving = (isMoving) => {
  return {
    type: types.SET_MOVING,
    payload: {
      isMoving,
    }
  }
}
