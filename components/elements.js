import React, {Component} from 'react'
import Element from './element.js'

class Elements extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let size = parseInt(this.props.size)
    let array = Array.apply(null, {length: size}).map(Number.call, Number)

    let colour = this.props.colour
    let brushAction = this.props.brush
    const elements = array.map(function(e) {
      return <div key={e} className='elements-row'>{
        array.map(function(f) {
          return <Element x={10} y={10} propKey={f} colour={colour} brushAction={brushAction}/>
        })
      }</div>
    })

    return(
      <div>
        {elements}
      </div>
    )
  }
}

export default Elements
