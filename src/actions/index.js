export const SET_QUERY = 'SET_QUERY';

export function setQuery(props) {
  return {
    type: SET_QUERY,
    payload: props
  };
}
