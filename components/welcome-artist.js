import React, { Component } from 'react'

class WelcomeArtist extends Component {

  constructor(props){
    super(props)
    this.state = {name: this.props.name} // player 1 is default name
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  render () {
    return (
      <section className='welcome-artist'>
        <input onChange={this.handleChange.bind(this)} placeholder="input name"/>
        <h1>Welcome to the paintbox {this.state.name}! Let your artistic adventure commence...</h1>
      </section>
      )
  }

}


export default WelcomeArtist