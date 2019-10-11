import React, { Component } from 'react'
import Element from './element.js'

class Elements extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: parseInt(props.size),
    }
  }

  createElements(size, colour, brushAction) {
    const array = []
    for (let x = 0; x < size; x = x + 10) {
      for (let y = 0; y < size; y = y + 10) {
        array.push(
          <Element x={x} y={y} colour={colour} brushAction={brushAction} />
        )
      }
    }
    return array
  }

  render() {
    let size = parseInt(this.props.size)
    let array = Array.apply(null, { length: size }).map(Number.call, Number)

    let colour = this.props.colour
    let brushAction = this.props.brush
    let dimension = this.state.size * 10

    const styles = {
      transition: 'width 0.5s, height 0.5s',
      width: this.state.size * 10 + 'px',
      height: this.state.size * 10 + 'px',
    }

    let elements = this.createElements(dimension, colour, brushAction)

    return (
      <div>
        <svg style={styles}>{elements}</svg>
      </div>
    )
  }
}

export default Elements
