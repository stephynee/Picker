import {SAVE_MOVIE, REMOVE_MOVIE} from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_MOVIE:
      return [action.payload, ...state];
    case REMOVE_MOVIE:
      return state.filter(movie => movie.posterPath !== action.payload);
    default:
      return state;
  }
}
