/* jshint esversion: 6 */

import React, { Component } from 'react';  // jshint ignore:line
import Widget from '/app/components/Widget';

export default class List extends Component {
  render () {
    return (
      <div className="list">
        <Widget />
      </div>
    );
  }
}
