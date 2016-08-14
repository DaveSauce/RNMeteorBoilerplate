/* jshint esversion: 6 */

// Sign in logic

import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Meteor, { Accounts } from 'react-native-meteor';
import styles from './styles';


class SignIn extends React.Component {
  constructor ( props ){
    super ( props );

    this.state = {
      email: '',
      password: '',
      error: null
    };
  }

  isValid () {
    // Basic validation that tests if the inputs have any content
    const { email, password } = this.state;
    let valid = false;

    if ( email.length > 0 && password.length > 0 ) {
      valid = true;
    }

    if (email.length === 0) {
      this.setState({ error: 'You must enter an email address' });
    } else if (password.length === 0) {
      this.setState({ error: 'You must enter a password' });
    }

    return valid;
  }

  onSignIn () {
    const { email, password } = this.state;

    if ( this.isValid() ) {
      Meteor.loginWithPassword( email, password, ( error ) => {
        if ( error ) {
          this.setState({ error: error.reason });
        }
      });
    }
  }

  onCreateAccount () {
    const { email, password } = this.state;

    if ( this.isValid() ) {
      Accounts.createUser({ email, password }, ( error ) => {
        if ( error ) {
          this.setState({ error: error.reason });
        } else {
          this.onSignIn(); // hopefully temporary hack
        }
      });
    }
  }

  render () {
    return (
      <View style={ styles.container }>
        <TextInput
          style={ styles.input }
          onChangeText={ ( email ) => this.setState( { email } ) }
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={ false }
          keyboardType="email-address"
        />

        <TextInput
          style={ styles.input }
          onChangeText={ ( password ) => this.setState( { password } ) }
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={ false }
          secureTextEntry={ true }
        />

        <Text style={ styles.error }>{ this.state.error }</Text>

        <TouchableOpacity style={ styles.button } onPress={ this.onSignIn.bind( this ) }>
          <Text style={ styles.buttonText }>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.button } onPress={ this.onCreateAccount.bind( this ) }>
          <Text style={ styles.buttonText }>Create Account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignIn;
