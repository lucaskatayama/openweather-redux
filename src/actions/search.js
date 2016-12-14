import 'isomorphic-fetch';
import * as types from 'constants/ActionTypes';
import ow from 'utils/openweather';
import { graphql } from 'graphql';

export const search = (q, units = 'metric') => (dispatch) => {
  if (!q) {
    dispatch({ type: types.WEATHER_SEARCH_ERROR, payload: 'No city provided!' });
    return null;
  }
  dispatch({ type: types.WEATHER_SEARCH_PENDING });
  return graphql(ow, `{searchWeather(q:"${q}", units:"${units}"){
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
    .then(json => dispatch({
      type: types.WEATHER_SEARCH_SUCCESS,
      payload: json.data.searchWeather,
    }))
    .catch(err => dispatch({ type: types.WEATHER_SEARCH_ERROR, payload: err }));
};
