import 'babel-polyfill';
import 'isomorphic-fetch';
import 'bootstrap/less/bootstrap.less';
import 'bootstrap/less/theme.less';
import 'font-awesome/css/font-awesome.min.css';
import 'styles/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from 'containers/Routes';
import configureStore from 'store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main'),
);
