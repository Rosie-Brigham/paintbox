import React, {Component} from 'react'
import Element from './element.js'

class Elements extends Component {
  constructor(props){
    super(props)
  }

  createElements(size, colour, brushAction) {
    var array = []
    for (var x = 0; x < size; x = x + 10) {
      for (var y = 0; y < size; y = y + 10) {
        array.push(<Element x={x} y={y} colour={colour} brushAction={brushAction}/>)
      }
    }
    return array
  }

  render(){
    let size = parseInt(this.props.size)
    let array = Array.apply(null, {length: size}).map(Number.call, Number)

    let colour = this.props.colour
    let brushAction = this.props.brush
    let dimension = this.props.size * 10

    var styles = {
      width: dimension + 'px',
      height: dimension + 'px'
    }

    let elements= this.createElements(dimension, colour, brushAction)

    return(
      <div>
        <svg style={styles}>
          {elements}
        </svg>
      </div>
    )
  }
}

export default Elements
