import { combineReducers } from 'redux';
import app from 'reducers/app';
import search from 'reducers/search';
import units from 'reducers/units';

const rootReducer = combineReducers({
  app,
  search,
  units,
});


export default rootReducer;
