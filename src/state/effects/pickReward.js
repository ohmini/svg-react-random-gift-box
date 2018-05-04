import {take, call, put, select} from 'redux-saga/effects'

import {types} from '../actions'
import {randomItemAsync} from '../api/randomItemAsync'
import {loadRewardRatio} from '../api/loadRewardRatio'
import {calculateReward} from '../api/calculateReward'
import {delay} from '../../utils/delay'
import {setItem} from '../actions/setItem'
import {setClickable} from '../actions/setClickable'
import {setMoving} from '../actions/setMoving'
import {getItem} from '../selectors/getItem'
import {playSound} from '../../utils/playSound'

const round = 10
const changeRate = 70

export function* pickRewardEffect() {
  while (true) {
    yield take(types.PICK_REWARD)
    const items = yield call(loadRewardRatio)
    const reward = yield call(calculateReward, items)
    yield put(setClickable(false))
    yield put(setMoving(false))
    let i = 1
    for ( i ; i <= round; i++) {
        let prevItem = yield select(state => getItem(state))
        if (i === round) {
          prevItem = reward
        }
        const item = yield call(randomItemAsync, prevItem, i * changeRate )
        playSound('ping')
        yield put(setItem(item))
    }
    yield call(delay, i * changeRate )
    playSound('success')
    yield put(setItem(reward))
    yield put(setClickable(true))
  }
}
