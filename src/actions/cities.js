import { graphql } from 'graphql';
import ow from 'utils/openweather';
import * as types from 'constants/ActionTypes';

export const fetchCity = ({ id }, units) => (dispatch) => {
  graphql(ow, `{ getCity(id:${id}, units:"${units}") {
    description,
    icon,
    country,
    temp,
    temp_max,
    temp_min,
    pressure,
    humidity,
    name,
    id}}`)
    .then(data => dispatch({
      type: types.CITY_FETCH_SUCCESS,
      payload: data.data.getCity,
    }));
};
