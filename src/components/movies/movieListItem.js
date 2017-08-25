import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import SubHeading from '../core/subheading'
import MovieImage from './movieImage'

const Movie = styled.div`
    float:left;
    width:${(props) =>
        props.featured ? '50%' : '30%'
    };

    margin-right:1%;
`

export default class MovieListItem extends Component {
  render () {
    let genres = null

    if (this.props.genres != null) {
      let genreCount = this.props.genres.length
      genres = this.props.genres.map((genre, index) => {
        return (index < genreCount - 1) ? <span key={genre}>{genre}, </span> : <span key={genre}>{genre}</span>
      })
    }

    return (
      <Movie featured={this.props.featured} key={this.props.id}>
        <MovieImage featured={this.props.featured} src={this.props.image} title={this.props.title} />
        <SubHeading>
          <Link to={`/movies/${this.props.shorttitle}`}>
            {this.props.title}
          </Link>
        </SubHeading>

        {genres}
      </Movie>
    )
  }
}
