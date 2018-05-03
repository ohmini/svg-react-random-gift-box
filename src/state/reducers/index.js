import {types} from '../actions'
import {setItem} from './setItem'
import {setClickable} from './setClickable'
import {setDisplay} from './setDisplay'
import {setMoving} from './setMoving'

const initialState = {
  item: null,
  clickable: true,
  display: false,
  isMoving: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ITEM:
      return setItem(state, action)
    case types.SET_CLICKABLE:
      return setClickable(state, action)
    case types.SET_DISPLAY:
      return setDisplay(state, action)
    case types.SET_MOVING:
      return setMoving(state, action)
    default:
      return state;
  }
}

export default reducer
