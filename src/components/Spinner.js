import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img className='spin' src={loading} alt='loading'/>
      </div>
    )
  }
}

export default Spinner
