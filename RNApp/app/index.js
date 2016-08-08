/* jshint esversion: 6 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import reducer from './reducers/initialState.js';
import defaultState from './lib/defaultState.js';

import List from './routes/List';
import Edit from './routes/Edit';

const client = new ApolloClient();

console.log( defaultState )
console.log( reducer )

const store = createStore(
  combineReducers({
    reducer,
    apollo: client.reducer()
  }),
  defaultState
);

export default class App extends Component {
  render() {
    return (
      <ApolloProvider store={ store } client={ client }>
        <Router>
          <Scene key="root">
            <Scene key="list" component={ List } title="List" initial={ true } />
            <Scene key="edit" component={ Edit } title="Edit" />
          </Scene>
        </Router>
      </ApolloProvider>
    );
  }
}
