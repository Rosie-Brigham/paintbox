import React, { Component } from 'react'
import Elements from './elements.js'
import Styled from 'styled-components'
import wait from 'waait'
import { debounce } from 'lodash'

const ConfigOptions = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
  .config-option {
    width: 25%;
    min-width: 150px;
    margin: 0 10px;
    &--text-input {
      width: 300px;
    }
  }
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`

const ClearButton = Styled.button`
  :disabled {
    pointer-events: none;
    color: #d8d6d6;
    border-color: #d8d6d6;
  }
`

const colors = [
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#FFFFFF' },
  { name: 'Red', value: '#FF0000' },
  { name: 'Orange', value: '#FFA500' },
  { name: 'Yellow', value: '#FFFF00' },
  { name: 'Green', value: '#008000' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'Indigo', value: '#4B0082' },
  { name: 'Violet', value: '#EE82EE' },
]

const canvasSizeLimit = 30

class SketchCanvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 0,
      colour: '#000000',
      brush: 'onMouseOver',
      clearingCanvasInt: 0,
    }
    this.clearCanvas = this.clearCanvas.bind(this)
    this.clearing = false
    this.updateSize = debounce(this.updateSize, 500)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(e)
    this.updateSize(e.target.value)
  }

  updateSize(size) {
    this.setState({ size })
  }

  handleColourChange(e) {
    this.setState({ colour: e.target.value })
  }

  handleBrushChange(e) {
    this.setState({ brush: e.target.value })
  }

  generateCanvas() {
    return (
      <Elements
        key={this.state.clearingCanvasInt}
        size={this.state.size}
        colour={this.state.colour}
        brush={this.state.brush}
      />
    )
  }

  withinSizeRange() {
    return this.state.size > 0 && this.state.size <= canvasSizeLimit
  }

  clearCanvas() {
    console.log('clearing')
    this.setState(prevState => ({
      clearingCanvasInt: prevState.clearingCanvasInt + 1,
    }))
  }

  render() {
    return (
      <section>
        <ConfigOptions className="row config-options">
          <div className="config-option config-option--text-input">
            <input
              onChange={this.handleChange}
              placeholder={`What size canvas would you like? (1-${canvasSizeLimit})`}
              className="canvas-select"
            />
          </div>

          <div className="config-option">
            <select
              onChange={this.handleBrushChange.bind(this)}
              className="colour-select"
            >
              <option value="onMouseOver">Hover</option>
              <option value="onClick">Click</option>
            </select>
          </div>

          <div className="config-option">
            <select
              onChange={this.handleColourChange.bind(this)}
              className="colour-select"
            >
              {colors.map(color => {
                return <option value={color.value}>{color.name}</option>
              })}
            </select>
          </div>
          <div className="config-option">
            <ClearButton
              disabled={!this.withinSizeRange()}
              onClick={this.clearCanvas}
            >
              Clear Canvas
            </ClearButton>
          </div>
        </ConfigOptions>

        <div className="row">
          <div className="twleve-columns row-canvas">
            {this.withinSizeRange() ? (
              this.generateCanvas()
            ) : (
              <p>
                Please select a canvas size
                {this.state.size > canvasSizeLimit
                  ? ` lower than ${canvasSizeLimit + 1}`
                  : ''}
              </p>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default SketchCanvas
