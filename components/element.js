import React, {Component} from 'react'
import Radium from 'radium'

class Element extends Component {
  constructor(props){
    super(props)

    const plain = {width: '15px', height: '15px', fill: '#F9D9FF' }
    this.state = {hover: false, style: plain};
  }

  mouseOver() {
    const filled = {width: '15px', height: '15px', fill: this.props.colour }
    this.setState({hover: true, style: filled});
  }

  render () {
    const styles = {width: '15px', height: '15px'}
    console.log(this.props.brushAction)

    return (
      <svg style={styles}>
        <rect onMouseOver={this.mouseOver.bind(this)} key={this.props.propKey} style={this.state.style} />
      </svg>
    )
  }
}

export default Element