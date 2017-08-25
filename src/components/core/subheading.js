import React, { Component } from 'react'

import styled from 'styled-components'

const StyledHeading = styled.h2`
    margin:0.5em 0 0.5em;
    padding:0 0 0.5em;
    border-bottom:1px solid rgba(0,0,0,0.2);
    color:#000;

    a{
      text-decoration:none;
      color:#000;

    &:hover{
      text-decoration:underline;
    }


}
`

export default class SubHeading extends Component {
  render () {
    let heading = null
    if (this.props.title != null) {
      heading = <StyledHeading>{this.props.title}</StyledHeading>
    } else {
      heading = <StyledHeading>{this.props.children}</StyledHeading>
    }

    return (
      <div>{heading}</div>
    )
  }
}
