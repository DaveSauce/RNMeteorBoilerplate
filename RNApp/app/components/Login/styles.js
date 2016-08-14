/* jshint esversion: 6 */

import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const { width } = Dimensions.get( 'window' );
const ELEMENT_WIDTH = width - 40;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  input: {
    width: ELEMENT_WIDTH,
    fontSize: 16,
    height: 36,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#888',
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#3B5998',
    width: ELEMENT_WIDTH,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  }
});
