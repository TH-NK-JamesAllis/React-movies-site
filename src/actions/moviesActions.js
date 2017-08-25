import axios from 'axios'

export function addMovie (name, desc) {
  return {
    type: 'ADD_MOVIE',
    payload: {name: name, desc: desc}
  }
}

export function getMovies () {
  return function (dispatch) {
    axios.get('http://localhost:3000/movies/')
      .then((response) => {
        dispatch({type: 'GET_MOVIES_FULFILLED', payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'GET_MOVIES_REJECTED', payload: err})
      })
  }
}

export function hideMovie (movieId) {
  return {
    type: 'HIDE_MOVIE',
    payload: {movieId: movieId}
  }
}

export function showAllMovies () {
  return {
    type: 'SHOW_ALL_MOVIES'
  }
}

export function filterMoviesByGenre (genre) {
  return {
    type: 'FILTER_MOVIES',
    payload: {genre: genre}
  }
}
