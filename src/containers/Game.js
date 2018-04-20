import { connect } from 'react-redux'

import {randomItem} from '../actions'
import App from '../App'

const mapStateToProps = state => ({
  item: state.item,
})

const Game = connect(mapStateToProps,{
  randomItem: randomItem,
})(App)

export default Game
