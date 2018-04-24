import {types} from '../actions'
import {setItem} from './setItem'

const initialState = {
  item: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ITEM:
      return setItem(state, action)
    default:
      return state;
  }
}

export default reducer
