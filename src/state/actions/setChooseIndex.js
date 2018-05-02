import {types} from './'

export const setChooseIndex = (index) => {
  return {
    type: types.SET_CHOOSE_INDEX,
    payload: {
      index,
    }
  }
}
