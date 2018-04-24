import {types} from './'

export const randomItem = (index) => {
  return {
    type: types.RANDOM_ITEM,
    payload: {
      index,
    }
  }
}
