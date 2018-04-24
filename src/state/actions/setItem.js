import {types} from './'

export const setItem = (item, index) => {
  return {
    type: types.SET_ITEM,
    payload: {
      item,
      index,
    }
  }
}
