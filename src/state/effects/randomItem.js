import {take, call, put} from 'redux-saga/effects'

import {types} from '../actions'
import {randomItemAsync} from '../api/randomItem'
import {setItem} from '../actions/setItem'
import {setClickable} from '../actions/setClickable'
import {setChooseIndex} from '../actions/setChooseIndex'

export function* randomItemEffect() {
  while (true) {
    const {payload: {index}} = yield take(types.RANDOM_ITEM)
    yield put(setClickable(false))
    yield put(setChooseIndex(index))
    const item = yield call(randomItemAsync)
    yield put(setItem(item, index))
    yield put(setChooseIndex(null))
    yield put(setClickable(true))
  }
}
