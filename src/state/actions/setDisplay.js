import {types} from './'

export const setDisplay = (display) => {
  return {
    type: types.SET_DISPLAY,
    payload: {
      display,
    }
  }
}
