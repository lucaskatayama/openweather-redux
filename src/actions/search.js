import 'isomorphic-fetch';
import { endpoint, appid } from 'config';
import * as types from 'constants/ActionTypes';

export const fetchWeather = (q, units = 'metric') => (dispatch) => {
  if (!q) {
    dispatch({ type: types.WEATHER_FETCH_ERROR, payload: 'No city provided!' });
    return new Promise();
  }
  dispatch({ type: types.WEATHER_FETCH_PENDING });
  return fetch(`${endpoint}/weather/?q=${q}&appid=${appid}&units=${units}`)
        .then(response => response.json())
        .then(json => dispatch({ type: types.WEATHER_FETCH_SUCCESS, payload: json }))
        .catch(err => dispatch({ type: types.WEATHER_FETCH_ERROR, payload: err }));
};

export const search = (q, units = 'metric') => (dispatch) => {
  if (!q) {
    dispatch({ type: types.WEATHER_SEARCH_ERROR, payload: 'No city provided!' });
    return new Promise();
  }
  dispatch({ type: types.WEATHER_SEARCH_PENDING });
  return fetch(`${endpoint}/weather/?q=${q}&appid=${appid}&units=${units}`)
        .then(response => response.json())
        .then(json => dispatch({ type: types.WEATHER_SEARCH_SUCCESS, payload: json }))
        .catch(err => dispatch({ type: types.WEATHER_SEARCH_ERROR, payload: err }));
};
