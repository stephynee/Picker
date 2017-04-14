import {combineReducers} from 'redux';

import queryReducer from './query-reducer';

const rootReducer = combineReducers({
  query: queryReducer
});

export default rootReducer;
