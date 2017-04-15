import {combineReducers} from 'redux';

import queryReducer from './query-reducer';
import movieReducer from './movie-reducer';
import savedMoviesReducer from './saved-movies-reducer';

const rootReducer = combineReducers({
  query: queryReducer,
  movie: movieReducer,
  savedMovies: savedMoviesReducer
});

export default rootReducer;
