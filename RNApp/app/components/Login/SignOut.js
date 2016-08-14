/* jshint esversion: 6 */

// Sign out logic

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Meteor from 'react-native-meteor';
import styles from './styles';

class SignOut extends React.Component {
  render () {
    return (
      <View style={ styles.container }>
        <TouchableOpacity style={ styles.button } onPress={ () => Meteor.logout() }>
          <Text style={ styles.buttonText }>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignOut;
