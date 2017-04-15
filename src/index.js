import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/app';

const createStoreFromMiddleware = applyMiddleware(reduxThunk)(createStore);
const localStorageState = {
  savedMovies: localStorage.getItem('savedMovies') ? JSON.parse(localStorage.getItem('savedMovies')) : []
};
const store = createStoreFromMiddleware(reducers, localStorageState);

store.subscribe(() => {
  localStorage.setItem('savedMovies', JSON.stringify(store.getState().savedMovies));
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App}/>
    </Router>
  </Provider>
, document.querySelector('#app'));
