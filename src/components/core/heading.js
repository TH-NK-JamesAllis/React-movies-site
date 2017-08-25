import React, { Component } from 'react'

import styled from 'styled-components'

const StyledHeading = styled.h1`
    margin:0.5em 0 0.5em;
    padding:0 0 0.5em;
    border-bottom:1px solid rgba(0,0,0,0.2);

    color:${props => props.theme.light};
`

export default class Heading extends Component {
  render () {
    return (
      <StyledHeading>{this.props.title}</StyledHeading>
    )
  }
}
