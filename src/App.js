import React, {Component} from 'react'
import {withHandlers, withState, compose} from 'recompose'
import {connect} from 'react-redux'

import {randomItem} from './state/actions/randomItem'
import {pickReward} from './state/actions/pickReward'
import {getItem} from './state/selectors/getItem'
import {getClickable} from './state/selectors/getClickable'
import {getMoving} from './state/selectors/getMoving'
import Canvas from './components/Canvas'

class App extends Component {
  componentDidMount () {
    const {handleResize} = this.props
    window.addEventListener('resize', handleResize)
  }

  componentWillUnmount () {
    const {handleResize} = this.props
    window.removeEventListener('resize', handleResize)
  }

  render() {
    const {item, windowWidth, windowHeight, randomItem, clickable, pickReward, isMoving} = this.props
    return (
      <Canvas
        item={item}
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        randomItem={randomItem}
        clickable={clickable}
        pickReward={pickReward}
        isMoving={isMoving}
      />
    )
  }
}

const enhance = compose(
  withState('windowWidth', 'setWindowWidth', window.innerWidth),
  withState('windowHeight', 'setWindowHeight', window.innerHeight),
  withHandlers({
    handleResize: ({setWindowWidth, setWindowHeight}) => (e) => {
      setWindowWidth(e.target.innerWidth)
      setWindowHeight(e.target.innerHeight)
    }
  }),
)

const mapStateToProps = (state) => ({
  item: getItem(state),
  clickable: getClickable(state),
  isMoving: getMoving(state),
})

const withStore = connect(mapStateToProps, {
  randomItem: randomItem,
  pickReward: pickReward,
})

export default withStore(enhance(App))
