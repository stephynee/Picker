import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Nav from './nav';
import Main from './main';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Nav/>
        <Route exact path="/" component={Main}/>
      </div>
    );
  }
}

export default App;
