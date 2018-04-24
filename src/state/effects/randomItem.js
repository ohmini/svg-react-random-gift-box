import {take, call, put} from 'redux-saga/effects'

import {types} from '../actions'
import {randomItem} from '../api/randomItem'
import {setItem} from '../actions/setItem'

export function* randomItemEffect() {
  while (true) {
    const {payload: {index}} = yield take(types.RANDOM_ITEM)
    const item = yield call(randomItem)
    yield put(setItem(item, index))
  }
}
