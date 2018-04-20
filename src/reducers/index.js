import {RANDOM_ITEM} from '../actions'
import {randomItems} from '../utils/formulas'

const initialState = {
  item: 'gift',
}

const randomItem = (state, action) => {
  return {
    ...state,
    item: randomItems(),
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case RANDOM_ITEM:
      return randomItem(state, action)
    default:
      return state;
  }
}

export default reducer
