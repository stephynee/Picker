import {combineReducers} from 'redux';

import queryReducer from './query-reducer';
import movieReducer from './movie-reducer';

const rootReducer = combineReducers({
  query: queryReducer,
  movie: movieReducer
});

export default rootReducer;
