import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

import Bands from '../components/Bands'

class BandsContainer extends Component {

  constructor(props) {
    super(props)
  }

  handleOnSubmit = (name) => {
    this.props.addBandName(name)
  }

  render() {
      return(
      <div>
        <BandInput handleOnSubmit={this.handleOnSubmit}/>

        <Bands bands={this.props.bands} />

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBandName: (name) => {
      dispatch({type: 'ADD_BAND', band: name})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
