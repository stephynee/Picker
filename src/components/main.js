import React, {Component} from 'react';

class Main extends Component {
  randomMovie() {
    console.log();
    // call action that makes request to movie api using category props
    // navigate to movie details view
  }

  render() {
    return (
      <div className="picker-btn" onClick={this.randomMovie}>
        <span className="glyphicon glyphicon-repeat"></span> Pick a movie
      </div>
    );
  }
}

export default Main;
