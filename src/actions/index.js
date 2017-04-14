import axios from 'axios';

export const SET_QUERY = 'SET_QUERY';
export const SET_MOVIE = 'SET_MOVIE';

export function setQuery(props) {
  return {
    type: SET_QUERY,
    payload: props
  };
}

export function getMovie(props, history) {
  return function(dispatch) {
    const url = '/api/movie';

    axios.get(url, {params: props})
      .then(res => {
        dispatch({
          type: SET_MOVIE,
          payload: res.data
        });

        if(history) {
          history.push('/movie');
        }
      });
  };
}
