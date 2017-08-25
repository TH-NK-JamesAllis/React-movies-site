import React, { Component } from 'react';

import { connect } from 'react-redux';

import Heading from'./core/heading';
import MovieListItem from './movies/movieListItem';

import { getMovies } from '../actions/moviesActions';


@connect((store)=>{
  return{
    movies:store.movies
  }
})

export default class Home extends Component {
    
  componentWillMount (){
    if(this.props.movies.movies.length==0){
      this.props.dispatch(getMovies());
    }
  }
    
  render () {
      
    let movie = this.props.movies.movies[0];
      
    return (
      <div>
        <Heading title="Home page" />
        {movie != null &&
            <MovieListItem featured id={movie.id} shorttitle={movie.shorttitle} title={movie.title} image={movie.image}/>
        }
      </div>
    );
  }
}