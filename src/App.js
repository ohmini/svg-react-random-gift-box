import React, {Component} from 'react'
import {withHandlers} from 'recompose'
import { connect } from 'react-redux'

import {randomItem} from './state/actions/randomItem'
import {getItem} from './state/selectors/getItem'
import Canvas from './components/Canvas'

class App extends Component {
  render() {
    const {handleClick, item} = this.props
    return (
      <Canvas handleClick={handleClick} item={item} />
    )
  }
}

const enhance = withHandlers({
  handleClick: ({randomItem}) => () => {
    randomItem()
  }
})

const mapStateToProps = (state) => ({
  item: getItem(state),
})

const withStore = connect(mapStateToProps, {
  randomItem: randomItem,
})

export default withStore(enhance(App))
