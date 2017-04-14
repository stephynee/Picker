import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Nav from './nav';
import Main from './main';
import MovieDetails from './movie-details';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Nav/>
        <Route exact path="/" component={Main}/>
        <Route path="/movie" component={MovieDetails}/>
      </div>
    );
  }
}

export default App;
