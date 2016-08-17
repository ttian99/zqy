import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import App from './App';
import EditExpress from './EditExpress';
import SearchExpress from './SearchExpress';
import EditTest from './EditTest';
import SearchTest from './SearchTest';

// withRouter HoC
// @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/upgrade-guides/v2.4.0.md#v240-upgrade-guide
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/editExpress" />
      <Route path="/editExpress" component={EditExpress} />
      <Route path="/searchExpress" component={SearchExpress} />
      <Route path="/editTest" component={EditTest} />
      <Route path="/searchTest" component={SearchTest} />
    </Route>
    <Route path="*" component={Page404} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
