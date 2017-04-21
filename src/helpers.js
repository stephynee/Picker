export const formatQuery = (key, value) => {
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

  return props;
};

export const formatTime = runtime => {
  const minutes = parseInt(runtime.split(' ')[0]);
  const hours = Math.floor(minutes / 60);
  const remainingMin = minutes % 60;

  return `${hours} hr ${remainingMin} min`;
};

export const getRatingColor = rating => {
  if(rating > 6.9) {
    return 'good';
  } else if(rating > 4.9 && rating < 7.0) {
    return 'okay';
  }

  return 'bad';
};
