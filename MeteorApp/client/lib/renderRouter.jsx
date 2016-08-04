/* jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from './../../app/reducers/initialState.js';

import App from './../../app/routes/App';
import Edit from './../../app/routes/Edit';
import List from './../../app/routes/List';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={ store }>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={ history }>
      <Route path="/" component={ App }>
        <Route path="edit" component={ Edit } />
        <Route path="list" component={ List } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
