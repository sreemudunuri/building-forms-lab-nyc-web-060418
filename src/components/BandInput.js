// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleOnSubmit(this.state.name)
    this.setState({
      name: ''
    })
  }

  handleChange = (e) => {
    this.setState(
      {name: e.target.value}
    )
  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
          <p>
            <label>Band Name</label>
            <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            />
          </p>
          <input type="submit"
          />
        </form>

        {this.state.name}
      </div>
    )
  }
}

export default BandInput
