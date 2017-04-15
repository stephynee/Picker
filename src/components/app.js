import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Nav from './nav';
import Main from './main';
import MovieDetails from './movie-details';
import SavedMovies from './saved-movies';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Nav/>
        <Route exact path="/" component={Main}/>
        <Route path="/movie" component={MovieDetails}/>
        <Route path="/saved" component={SavedMovies}/>
      </div>
    );
  }
}

export default App;
