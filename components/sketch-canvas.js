import React, { Component } from 'react'
import Elements from './elements.js'

class SketchCanvas extends Component {

  constructor(props){
    super(props)
    this.state = {size: 0, colour: '#000000', brush: 'onMouseOver'}
  }

  handleChange(e) {
    this.setState({size: e.target.value});
  }

  handleColourChange(e) {
    this.setState({colour: e.target.value});
  }

  handleBrushChange(e) {
    this.setState({brush: e.target.value});
  }

  generateCanvas() {
    return (
      <Elements size={this.state.size} colour={this.state.colour} brush={this.state.brush}/>
    )
  }

  render () {
    return (
      <section>
        <div className="row">
          <div className="four columns">
            <input onChange={this.handleChange.bind(this)}
            placeholder="What size canvas would you like? (1-30)" className="canvas-select"/>
          </div>

          <div className="four columns">
            <select onChange={this.handleBrushChange.bind(this)} className="colour-select">
              <option value="onMouseOver">Hover</option>
              <option value="onClick">Click</option>
            </select>
          </div>

          <div className="four columns">
            <select onChange={this.handleColourChange.bind(this)} className="colour-select">
              <option value="#000000">Black</option>
              <option value="#FFFFFF">White</option>
              <option value="#FF0000">Red</option>
              <option value="#FFA500">Orange</option>
              <option value="#FFFF00">Yellow</option>
              <option value="#008000">Green</option>
              <option value="#0000FF">Blue</option>
              <option value="#4B0082">Indigo</option>
              <option value="#EE82EE">Violet</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="twleve-columns row-canvas">
            {this.state.size > 0 ? this.generateCanvas() : <p>Please select a canvas size</p>}
          </div>
        </div>

      </section>
    )
  }

}


export default SketchCanvas