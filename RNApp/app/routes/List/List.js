/* jshint esversion: 6 */

import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Widget from './../../components/Widget';
import Login from './../../components/Login'; // Includes logout

const List = ( props ) => {
  return (
    <View style={ styles.container }>

      <Login />

      <Text style={ styles.main }>
        List
      </Text>
      <Text style={ styles.main }>
        <Widget />
      </Text>
    </View>
  );
};

export default List;
