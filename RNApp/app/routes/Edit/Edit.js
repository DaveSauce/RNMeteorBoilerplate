/* jshint esversion: 6 */

import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Edit = ( props ) => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.main }>
        Edit
      </Text>
    </View>
  );
};

export default Edit;
