import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setQuery} from '../actions';
import {Link} from 'react-router-dom';

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
    const props = {};

    if(key === 'Genre') {
      props.genre = value;
    }

    if(key === 'Min Rating') {
      props.rating = value;
    }

    if(key === 'Date') {
      props.year1 = value ? `${value.substr(0, 4)}-01-01` : '';
      props.year2 = value ? `${value.substr(7, 4)}-12-31` : '';
    }

    this.props.setQuery(props);
  }

  render() {
    const genres = ['Action', 'Adventure', 'Animated', 'Comedy', 'Documentary', 'Drama', 'Fantasy', 'Foreign', 'Horror', 'Romance', 'Sci-fi', 'Thriller'];
    const dates = [`2010 - ${new Date().getFullYear()}`, '2000 - 2009', '1990 - 1999', '1980 - 1989', '1970 - 1979', '1960 - 1969', '1950 - 1959', '1940 - 1949', '1930 - 1939', '1920 - 1929'];
    const ratings = ['8.0', '7.0', '6.0', '5.0'];

    return (
      <div className="menu">
        <Link className="logo" to="/"><h1>picker</h1></Link>
        {this.buildSelect('Genre', genres)}
        {this.buildSelect('Date', dates)}
        {this.buildSelect('Min Rating', ratings)}
      </div>
    );
  }
}

export default connect(null, {setQuery})(Nav);
