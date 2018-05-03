import {take, call, put, select} from 'redux-saga/effects'

import {types} from '../actions'
import {randomItemAsync} from '../api/randomItemAsync'
import {setItem} from '../actions/setItem'
import {setClickable} from '../actions/setClickable'
import {setMoving} from '../actions/setMoving'
import {getMoving} from '../selectors/getMoving'
import {getItem} from '../selectors/getItem'

const round = 10
const changeRate = 70

export function* pickRewardEffect() {
  while (true) {
    yield take(types.PICK_REWARD)
    yield put(setClickable(false))
    yield put(setMoving(false))
    for (let i = 1; i < round; i++) {
        const prevItem = yield select(state => getItem(state))
        const item = yield call(randomItemAsync, prevItem, i * changeRate )
        yield put(setItem(item))
    }
    yield put(setClickable(true))
  }
}
