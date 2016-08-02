/* jshint esversion: 6 */

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import Edit from './../routes/Edit';
import List from './../routes/List';

export const renderRoutes = () => (
  <Router history={ browserHistory }>
    <Route path="edit" component={ Edit } />
    <Route path="list" component={ List } />
  </Router>
);
