import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Greeting extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      age : 29
    }
  }  

  
  render() {
    return (
      <div>
        <h1>Hola {this.props.name}</h1>
        <h2>Edad {this.state.age}</h2>
        <div>
          <button onClick={this.birtdhay}>Cumplir años</button>
        </div>
      </div>
    )
  };

  birtdhay = () => {
    this.setState((prevState)=>(
      {
        age: prevState.age + 1
      }
    ))
  }
  
}

Greeting.propTypes = {
  name: PropTypes.string,
}