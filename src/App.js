import React, {Component} from 'react'
import {withHandlers} from 'recompose'

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

export default enhance(App)
