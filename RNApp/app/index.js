/* jshint esversion: 6 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/initialState.js';
import defaultState from './lib/defaultState.js';

import List from './routes/List';
import Edit from './routes/Edit';

const store = createStore( reducer, defaultState );

export default class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <Router>
          <Scene key="root">
            <Scene key="list" component={ List } title="List" initial={ true } />
            <Scene key="edit" component={ Edit } title="Edit" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
