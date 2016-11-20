import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import nock from 'nock';
import { endpoint } from 'config';
import { fetchWeather } from 'actions/search';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Weather Action', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('should dispatch PENDING and SUCCESS actions', () => {
    const q = 'Campinas';
    nock(endpoint)
      .get('/weather/')
      .query(query => query.q === q)
      .reply(200, {});
    const store = mockStore({ search: {} });
    const actions = [
      { type: 'WEATHER_FETCH_PENDING' },
      { type: 'WEATHER_FETCH_SUCCESS', payload: {} },
    ];
    return store.dispatch(fetchWeather(q))
      .then(() => {
        const storeActions = store.getActions();
        expect(storeActions).to.be.eql(actions);
      });
  });

  it('should dispatch ERROR when no {q} is provided', () => {
    const store = mockStore({ search: {} });
    const actions = [
      { type: 'WEATHER_FETCH_ERROR', payload: 'No city provided!' },
    ];
    let b;
    store.dispatch(fetchWeather(b));
    const storeActions = store.getActions();
    expect(storeActions).to.be.eql(actions);
  });
  it('should dispatch ERROR when {q} is empty', () => {
    const store = mockStore({ search: {} });
    const actions = [
      { type: 'WEATHER_FETCH_ERROR', payload: 'No city provided!' },
    ];
    store.dispatch(fetchWeather(''));
    const storeActions = store.getActions();
    expect(storeActions).to.be.eql(actions);
  });
});
