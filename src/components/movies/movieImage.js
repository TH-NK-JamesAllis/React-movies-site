import React, { Component } from 'react'

import styled from 'styled-components'

const ImageWrapper = styled.div`
    width:100%;
    height:${(props) =>
        props.featured ? '350px' : '200px'
    };
    overflow:hidden;
    position:relative;

    img{
        width:100%;
        heigth:100%;
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        transition:all ease-out  1000ms;
        filter:brightness(90%);
    }

    :hover{
        img{
            transform:translateY(-40%) scale(1.1);
            filter:brightness(110%);
        }
    }
`

export default class MovieImage extends Component {
  render () {
    return (
      <ImageWrapper featured={this.props.featured}>
        <img src={this.props.src} alt={this.props.titletitle} />
      </ImageWrapper>
    )
  }
}
