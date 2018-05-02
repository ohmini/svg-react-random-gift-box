import {types} from '../actions'
import {setItem} from './setItem'
import {setClickable} from './setClickable'
import {setChooseIndex} from './setChooseIndex'

const initialState = {
  item: null,
  clickable: true,
  chooseIndex: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ITEM:
      return setItem(state, action)
    case types.SET_CLICKABLE:
      return setClickable(state, action)
    case types.SET_CHOOSE_INDEX:
      return setChooseIndex(state, action)
    default:
      return state;
  }
}

export default reducer
