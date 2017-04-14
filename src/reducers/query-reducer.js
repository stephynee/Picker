import {SET_QUERY} from '../actions';

export default function(state = {genre: '', rating: '', year1: '', year2: ''}, action) {
  switch (action.type) {
    case SET_QUERY:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
