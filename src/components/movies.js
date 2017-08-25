import React, { Component } from 'react';
import { connect } from 'react-redux';

import Heading from'./core/heading';

import MovieListItem from './movies/movieListItem';

import { getMovies,hideMovie,showAllMovies,filterMoviesByGenre } from '../actions/moviesActions';

@connect((store)=>{
  return{
    movies:store.movies
  }
})

export default class Movies extends Component {
    
  componentWillMount (){
    if(this.props.movies.movies.length==0){
      this.props.dispatch(getMovies());
      this.showAllMovies();
    }
    else{
      this.showAllMovies();
    }
  }
    
    /*componentWillReceiveProps(nextProps){
       // console.log("componentWillReceiveProps",nextProps)
    }*/
    
  hideMovieById (movieId){
    this.props.dispatch(hideMovie(movieId))
  }
    
    
  showAllMovies (){
    this.props.dispatch(showAllMovies())
  }
    
  filterMoviesByGenre (genre){
    this.props.dispatch(filterMoviesByGenre(genre))
  }
    
  render () {
      
    let movies = this.props.movies.movies;
      
    return (
      <div>
        <Heading title="All movies" />
        <div>
            {
                movies.map (function (movie) {
        
                  if(movie.visible){

                    return <MovieListItem key={movie.id} id={movie.id} shorttitle={movie.shorttitle} title={movie.title} genres={movie.genres} image={movie.image}/>
                  }
                })
            }
        </div>

        <span onClick={()=>{this.hideMovieById('2')}}>Hide movie 2</span><br />
        <span onClick={()=>{this.filterMoviesByGenre('comedy')}}>Filter by Comedy</span><br />
        <span onClick={()=>{this.showAllMovies()}}>Reset</span><br />
        
      </div>
    );
  }
}