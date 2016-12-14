import 'isomorphic-fetch';
import url from 'url';
import { appid } from 'config';
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';

export const root = 'http://api.openweathermap.org/data/2.5/';
const urlConfig = url.parse(root);

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
  return fetch(fetchUrl).then(r => r.json());
};


function searchWeather(r, { q, units = 'metric' }) {
  return get('weather', { q, units });
}

function getCity(r, { id, units = 'metric' }) {
  return get('weather', { id, units });
}

const WeatherType = new GraphQLObjectType({
  name: 'Weather',
  description: 'Weather type',
  fields: () => ({
    description: {
      type: GraphQLString,
      resolve: json => json.weather[0].description,
    },
    id: {
      type: GraphQLInt,
      resolve: json => json.id,
    },
    icon: {
      type: GraphQLString,
      resolve: json => json.weather[0].icon,
    },
    country: {
      type: GraphQLString,
      resolve: json => json.sys.country,
    },
    temp: {
      type: GraphQLFloat,
      resolve: json => json.main.temp,
    },
    temp_max: {
      type: GraphQLFloat,
      resolve: json => json.main.temp_max,
    },
    temp_min: {
      type: GraphQLFloat,
      resolve: json => json.main.temp_min,
    },
    pressure: {
      type: GraphQLFloat,
      resolve: json => json.main.pressure,
    },
    humidity: {
      type: GraphQLFloat,
      resolve: json => json.main.humidity,
    },
    name: {
      type: GraphQLString,
    },
  }),
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    searchWeather: {
      type: WeatherType,
      args: {
        q: {
          type: GraphQLString,
        },
        units: {
          type: GraphQLString,
        },
      },
      resolve: searchWeather,
    },
    getCity: {
      type: WeatherType,
      args: {
        id: {
          type: GraphQLInt,
        },
        units: {
          type: GraphQLString,
        },
      },
      resolve: getCity,
    },
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});
