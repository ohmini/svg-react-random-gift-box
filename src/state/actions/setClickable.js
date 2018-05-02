import {types} from './'

export const setClickable = (clickable) => {
  return {
    type: types.SET_CLICKABLE,
    payload: {
      clickable,
    }
  }
}
