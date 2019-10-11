import React, { Component } from 'react'
import Radium from 'radium'

class Element extends Component {
  constructor(props) {
    super(props)

    const plain = { width: '15px', height: '15px', fill: '#F9D9FF' }
    this.state = { hover: false, style: plain }
  }

  handleUpdate() {
    const filled = { width: '15px', height: '15px', fill: this.props.colour }
    this.setState({ hover: true, style: filled })
  }

  render() {
    const brushAction = {
      [this.props.brushAction]: this.handleUpdate.bind(this),
    }

    return (
      <rect
        {...brushAction}
        key={this.props.propKey}
        style={this.state.style}
        x={this.props.x}
        y={this.props.y}
      />
    )
  }
}

export default Element
