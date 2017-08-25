import React, { Component } from 'react';
import Info from './movie/info';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getMovies } from '../actions/moviesActions';

@connect((store)=>{
  return{
    movies:store.movies
  }
})


export default class Movie extends Component {
    
  componentWillMount (){
    if(this.props.movies.movies.length==0){
      this.props.dispatch(getMovies());
    }
        
  }
    
  render () {
    let currentMovie = null;
    this.props.movies.movies.find((movie) => {
      if(movie.shorttitle == this.props.match.params.movieName){
        currentMovie = movie;
      }
    })
        
    return (
            
          <div>
            <Link to="/movies">Back</Link>
            
            {currentMovie != null &&
                <Info name={currentMovie.title} desc={currentMovie.desc}/>
              }
            
          </div>
    );
  }
}