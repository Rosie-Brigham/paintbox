import React, { Component } from 'react'
import WelcomeArtist from './welcome-artist.js'
import SketchCanvas from './sketch-canvas.js'


class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <section>
        <div className="row">
          <div className="twelve columns">
            <WelcomeArtist name={'Leonardo'}/>
          </div>
        </div>

        <SketchCanvas/>
      </section>
      )

  }

}

export default App
