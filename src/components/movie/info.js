import React, { Component } from 'react'

export default class Info extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
