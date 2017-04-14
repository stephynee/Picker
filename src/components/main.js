import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getMovie} from '../actions';

class Main extends Component {
  randomMovie() {
    this.props.getMovie(this.props.query, this.props.history);
  }

  render() {
    return (
      <div className="picker-btn" onClick={this.randomMovie.bind(this)}>
        <span className="glyphicon glyphicon-repeat"></span> Pick a movie
      </div>
    );
  }
}

function mapStateToProps({query}) {
  return {
    query
  };
}

export default connect(mapStateToProps, {getMovie})(Main);
