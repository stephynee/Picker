import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeMovie} from '../actions';

class SavedMovies extends Component {
  removeMovie(movie) {
    this.props.removeMovie(movie);
  }

  renderMovies() {
    const {savedMovies} = this.props;

    return savedMovies.map(movie => {
      return (
        <div className="col-sm-4 col-md-3" key={movie}>
          <span className="glyphicon glyphicon-remove-circle" onClick={() => this.removeMovie(movie)}></span>
          <img className="img-responsive" src={movie}/>
        </div>
      );
    });
  }

  render() {
    if(this.props.savedMovies.length < 1) {
      return <h2 className="error">No saved movies!</h2>;
    }

    return (
      <div className="saved-movies row">
        {this.renderMovies()}
      </div>
    );
  }
}

function mapStateToProps({savedMovies}) {
  return {savedMovies};
}

export default connect(mapStateToProps, {removeMovie})(SavedMovies);
