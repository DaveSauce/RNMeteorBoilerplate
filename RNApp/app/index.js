/* jshint esversion: 6 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import List from './routes/List';
import Edit from './routes/Edit';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="list" component={ List } title="List" initial={ true } />
          <Scene key="edit" component={ Edit } title="Edit" />
        </Scene>
      </Router>
    );
  }
}
