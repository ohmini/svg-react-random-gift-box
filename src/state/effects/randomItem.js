import {take, call, put, select} from 'redux-saga/effects'

import {types} from '../actions'
import {randomItemAsync} from '../api/randomItemAsync'
import {setItem} from '../actions/setItem'
import {setClickable} from '../actions/setClickable'
import {setMoving} from '../actions/setMoving'
import {getMoving} from '../selectors/getMoving'
import {getItem} from '../selectors/getItem'

export function* randomItemEffect() {
  while (true) {
    yield take(types.RANDOM_ITEM)
    yield put(setMoving(true))
    let isMoving = yield select(state => getMoving(state))
    while (isMoving) {
      const prevItem = yield select(state => getItem(state))
      const item = yield call(randomItemAsync, prevItem, 100)
      yield put(setItem(item))
      isMoving = yield select(state => getMoving(state))
    }
  }
}
