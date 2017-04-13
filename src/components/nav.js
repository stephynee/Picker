import React, {Component} from 'react';

class Nav extends Component {
  buildSelect(category, arr) {
    const options = arr.map(item => <option key={item}>{item}</option>);
    const selectClass = category.toLowerCase().replace(' ', '-');

    return (
      <select className={selectClass}>
        <option defaultValue>{category}</option>
        {options}
      </select>
    );
  }

  render() {
    const genres = ['Action', 'Adventure', 'Animated', 'Comedy', 'Documentary', 'Drama', 'Fantasy', 'Foreign', 'Horror', 'Romance', 'Sci-fi', 'Thriller'];
    const dates = ['2010 - Present', '2000 - 2009', '1990 - 1999', '1980 - 1989', '1970 - 1979', '1960 - 1969', '1950 - 1959', '1940 - 1949', '1930 - 1939', '1920 - 1929'];
    const ratings = ['8.0', '7.0', '6.0', '5.0'];

    return (
      <div className="menu">
        <h1 className="logo">picker</h1>
        {this.buildSelect('Genre', genres)}
        {this.buildSelect('Date', dates)}
        {this.buildSelect('Min Rating', ratings)}
      </div>
    );
  }
}

export default Nav;
