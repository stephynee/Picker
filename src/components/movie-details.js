import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getMovie, saveMovie} from '../actions';

class MovieDetails extends Component {
  randomMovie() {
    this.props.getMovie(this.props.query);
  }

  formatTime(runtime) {
    const minutes = parseInt(runtime.split(' ')[0]);
    const hours = Math.floor(minutes / 60);
    const remainingMin = minutes % 60;

    return `${hours} hr ${remainingMin} min`;
  }

  getRatingColor(rating) {
    if(rating > 6.9) {
      return 'good';
    } else if(rating > 4.9 && rating < 7.0) {
      return 'okay';
    }

    return 'bad';
  }

  saveMovie(posterPath, imdbUrl) {
    this.props.saveMovie({posterPath, imdbUrl});
  }

  render() {
    const {movie} = this.props;

    this.formatTime('113 min');

    if(Object.keys(movie).length === 0) {
      return <h2 className="error">No movie found!</h2>;
    }

    return (
      <div className="movie">
        <div className="poster">
          <img className="img-responsive" src={`https://image.tmdb.org/t/p/w500${movie.imagePath}`}/>
        </div>
        <div className="details">
          <h2>{movie.title} ({movie.year})</h2>
          <p className="time">{this.formatTime(movie.runtime)}</p>
          <p>
            <span className={`rating ${this.getRatingColor(movie.tmdbRating)}`}><span className="glyphicon glyphicon-star"></span> {movie.tmdbRating}</span>
          </p>
          <div>
            <div className="btn save" onClick={() => this.saveMovie(`https://image.tmdb.org/t/p/w500${movie.imagePath}`, `http://www.imdb.com/title/${movie.imdbID}`)}>Save</div>
            <span className="glyphicon glyphicon-repeat btn" onClick={this.randomMovie.bind(this)}></span>
          </div>
          <p>{movie.plot}</p>
          <p>
            <strong>{movie.genre}</strong>
          </p>
          <p><strong>Starring:</strong> {movie.actors}</p>
          <p>{movie.country}, {movie.language}</p>
          <p>
            iMDb Rating: <span className={`rating ${this.getRatingColor(movie.imdbRating)}`}><span className="glyphicon glyphicon-star"></span> {movie.imdbRating}</span>
          </p>
          <a target="_blank" href={`http://www.imdb.com/title/${movie.imdbID}`}>View on iMDb</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps({movie, query}) {
  return {movie, query};
}

export default connect(mapStateToProps, {getMovie, saveMovie})(MovieDetails);
