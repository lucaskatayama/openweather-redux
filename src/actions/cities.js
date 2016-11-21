import * as ow from 'utils/openweather';
import * as types from 'constants/ActionTypes';

export const fetchCity = ({ id }) => (dispatch) => {
  ow.get('weather', { id })
    .then(data => dispatch({
      type: types.CITY_FETCH_SUCCESS,
      payload: data,
    }));
};
