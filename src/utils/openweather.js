import 'isomorphic-fetch';
import url from 'url';
import { appid } from 'config';

export const root = 'http://api.openweathermap.org/data/2.5/';
const urlConfig = url.parse(root);

const translate = ({ weather: [w], main, sys: { country }, name, id }) => {
  const { temp, temp_max, temp_min, humidity, pressure } = main;
  const { description, icon } = w;
  return {
    description,
    icon,
    country,
    temp,
    temp_max,
    temp_min,
    pressure,
    humidity,
    name,
    id,
  };
};

export const get = (path, queryIn) => {
  const query = {
    appid,
    ...queryIn,
  };

  const pathname = url.resolve(urlConfig.pathname, path);
  const newJson = {
    ...urlConfig,
    query,
    pathname,
  };
  const fetchUrl = url.format(newJson);
  return fetch(fetchUrl).then(r => r.json()).then(json => translate(json));
};
