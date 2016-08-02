/* jshint esversion: 6 */

import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Widget from './../../components/Widget';

const List = ( props ) => {
  return (
    <View style={ styles.container }>
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
