/* jshint esversion: 6 */

import React, { Component } from 'react';  // jshint ignore:line

export default class Widget extends Component {
  componentWillReceiveProps(nextProps) {
    console.log( this.props )
    console.log( nextProps )
  }
  handleAddItem() {
    const name = Math.floor( Math.random() * 10 ); // make a random number
    Meteor.call( 'Items.addOne', { name }, (err, res) => {
      console.log( 'Items.addOne', err, res)
    });
  }
  render () {
    return (
      <div className="widget">
        <h1 className="widget__header">Welcome to React Native!</h1>
        <h2 className="widget__subheader">Item Count: { this.props.count }</h2>
        <div className="widget__button" onClick={ this.handleAddItem }>Add Item</div>
      </div>
    );
  }
}
