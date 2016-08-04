/* jshint esversion: 6 */

import Meteor, { createContainer } from 'react-native-meteor';
import Widget from './Widget.js';

export default createContainer(() => {
  Meteor.subscribe( 'items' );
  return {
    count: Meteor.collection( 'items' ).find().length,
  };
}, Widget);
