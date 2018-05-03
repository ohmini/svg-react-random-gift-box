import React, {Component} from 'react'
import {withHandlers, withState, compose} from 'recompose'
import {connect} from 'react-redux'

import {randomItem} from './state/actions/randomItem'
import {setDisplay} from './state/actions/setDisplay'
import {getItem} from './state/selectors/getItem'
import {getClickable} from './state/selectors/getClickable'
import {getChooseIndex} from './state/selectors/getChooseIndex'
import {getDisplay} from './state/selectors/getDisplay'
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
    const {item, windowWidth, windowHeight, randomItem, clickable, chooseIndex, setDisplay, display} = this.props
    return (
      <Canvas
        item={item}
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        randomItem={randomItem}
        chooseIndex={chooseIndex}
        clickable={clickable}
        display={display}
        setDisplay={setDisplay}
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
  chooseIndex: getChooseIndex(state),
  display: getDisplay(state),
})

const withStore = connect(mapStateToProps, {
  randomItem: randomItem,
  setDisplay: setDisplay,
})

export default withStore(enhance(App))
