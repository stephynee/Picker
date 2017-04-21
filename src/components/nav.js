import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setQuery} from '../actions';
import {Link} from 'react-router-dom';

import {formatQuery} from '../helpers';
import {genres, dates, ratings} from '../categories';

class Nav extends Component {
  buildSelect(category, arr) {
    const options = arr.map(item => <option key={item}>{item}</option>);
    const selectClass = category.toLowerCase().replace(' ', '-');

    return (
      <select className={selectClass} onChange={ e => {this.setQuery(category, e.target.value)}}>
        <option defaultValue value="">{category}</option>
        {options}
      </select>
    );
  }

  setQuery(key, value) {
    // set query state, formatted to send to api
    const props = formatQuery(key, value);

    this.props.setQuery(props);
  }

  render() {
    const savedButton = this.props.savedMovies.length > 0 ? (<Link to="/saved" className="btn save-btn">Saved</Link>) : '';

    return (
      <div className="menu">
        <Link className="logo" to="/"><h1>picker</h1></Link>
        {this.buildSelect('Genre', genres)}
        {this.buildSelect('Date', dates)}
        {this.buildSelect('Min Rating', ratings)}
        {savedButton}
      </div>
    );
  }
}

function mapStateToProps({savedMovies}) {
  return {savedMovies};
}

export default connect(mapStateToProps, {setQuery})(Nav);
