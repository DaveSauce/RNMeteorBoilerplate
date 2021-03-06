/* jshint esversion: 6 */

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Meteor from 'react-native-meteor';
import styles from './styles';

// A note about the SERVER_URL variable. You’ll need to change that depending on what platform you’re currently testing on and the environment you’re in. So, if you’re developing for the iOS simulator you’re in luck! You can use ws://localhost:3000/websocket. If you’re testing on an iOS device, Android device, or Android emulator you’ll have to use your machines IP address rather than localhost, such as ws://192.168.1.70:3000/websocket.
// If you’re deploying your app you’ll want to change that to point to your server url, such as ws://my-app.meteorapp.com/websocket
const SERVER_URL = 'ws://localhost:3000/websocket';

export default class Widget extends Component {
  componentWillMount() {
    Meteor.connect(SERVER_URL);
  }
  handleAddItem() {
    const name = Math.floor( Math.random() * 10 ); // make a random number
    Meteor.call( 'Items.addOne', { name }, (err, res) => {
      console.log( 'Items.addOne', err, res)
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Item Count: { this.props.count }
        </Text>

        <TouchableOpacity style={ styles.button } onPress={ this.handleAddItem } >
          <Text>Add Item</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
