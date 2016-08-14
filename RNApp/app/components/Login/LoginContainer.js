/* jshint esversion: 6 */

import React from 'react';
import Login from './Login.js';
import Meteor, { createContainer } from 'react-native-meteor';

export default createContainer( () => {
  return {
    user: Meteor.user()
  };
}, Login );
