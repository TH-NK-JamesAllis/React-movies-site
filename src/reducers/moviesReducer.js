const initialState = {
  movies: [],
  currentMovie: null
}

const moviesReducer = (state = initialState, action) => {
  let updatedmovies = []
  switch (action.type) {
  case 'GET_MOVIES_FULFILLED': {
    return {...state, movies: action.payload}
  }
  case 'SHOW_MOVIE': {
    break
  }
  case 'SHOW_ALL_MOVIES': {
    for (let i = 0; i < state.movies.length; i++) {
      let movie = Object.assign({}, state.movies[i])
      movie.visible = true
      updatedmovies.push(movie)
    }

    return {
      ...state, movies: updatedmovies
    }
  }
  case 'HIDE_MOVIE': {
    for (let i = 0; i < state.movies.length; i++) {
      if (state.movies[i].id === action.payload.movieId) {
        let movie = Object.assign({}, state.movies[i])
        movie.visible = false

        updatedmovies.push(movie)
      } else {
        updatedmovies.push(state.movies[i])
      }
    }

    return {
      ...state, movies: updatedmovies
    }
  }
  case 'FILTER_MOVIES': {
    if (action.payload.genre) { // filter by genre
      for (let i = 0; i < state.movies.length; i++) {
        let movie = null
        if (state.movies[i].genres.includes(action.payload.genre)) {
          movie = Object.assign({}, state.movies[i])
          movie.visible = true
        } else {
          movie = Object.assign({}, state.movies[i])
          movie.visible = false
        }

        updatedmovies.push(movie)
      }

      return {
        ...state, movies: updatedmovies
      }
    }
  }
  }

  return state
}

export default moviesReducer
