import {SET_MOVIE} from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_MOVIE:
      return action.payload;
    default:
      return state;
  }
}
