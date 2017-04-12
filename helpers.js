module.exports = {
  formatGenre: (genre) => {
    switch (genre) {
      case 'Action':
        return '28';
      case 'Adventure':
        return '12';
      case 'Animated':
        return '16';
      case 'Comedy':
        return '35';
      case 'Documentary':
        return '99';
      case 'Drama':
        return '18';
      case 'Fantasy':
        return '14';
      case 'Foreign':
        return '10769';
      case 'Horror':
        return '27';
      case 'Romance':
        return '10749';
      case 'Sci-fi':
        return '878';
      case 'Thriller':
        return '53';
    }
  }
};
