/* jshint esversion: 6 */

import React, { Component } from 'react';  // jshint ignore:line

export default class App extends Component {
  render () {
    return (
      <div className="app">
        { this.props.children }
      </div>
    );
  }
}
