/* jshint esversion: 6 */

// Returns log in or log out components, based on User status

import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import SignIn from './SignIn.js';
import SignOut from './SignOut.js';

class Login extends React.Component {
  constructor ( props ) {
    super( props );
    this.data = {};
  }
  render () {
    if( this.props.user ) {
      return <SignOut />;
    } else {
      return (
        <SignIn />
      );
    }
  }
}

export default Login;
