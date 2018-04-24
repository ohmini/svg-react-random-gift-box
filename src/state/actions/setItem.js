import {types} from './'

export const setItem = (item) => {
  return {
    type: types.SET_ITEM,
    payload: {
      item,
    }
  }
}
