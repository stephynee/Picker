import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeMovie} from '../actions';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class SavedMovies extends Component {
  removeMovie(movie) {
    this.props.removeMovie(movie);
  }

  renderMovies() {
    const {savedMovies} = this.props;

    return savedMovies.map(movie => {
      return (
        <div className="col-sm-4 col-md-3 .save-movie" key={movie.posterPath}>
          <span className="glyphicon glyphicon-remove-circle" onClick={() => this.removeMovie(movie.posterPath)}></span>
          <a href={movie.imdbUrl} target="_blank"><img className="img-responsive" src={movie.posterPath}/></a>
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
        <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionName="fade">

        {this.renderMovies()}

      </CSSTransitionGroup>
      </div>
    );
  }
}

function mapStateToProps({savedMovies}) {
  return {savedMovies};
}

export default connect(mapStateToProps, {removeMovie})(SavedMovies);
