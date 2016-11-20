import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import City from 'containers/City';
import NotFound from 'components/NotFound';
import SearchResults from 'containers/SearchResults';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="city/:id" component={City} />
      <Route path="search" component={SearchResults} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
