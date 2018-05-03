import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import {randomItemEffect} from './effects/randomItem'
import {pickRewardEffect} from './effects/pickReward'

const effects = [
  randomItemEffect,
  pickRewardEffect,
]

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(
      sagaMiddleware,
    ))
)

effects.forEach(fx => sagaMiddleware.run(fx))
