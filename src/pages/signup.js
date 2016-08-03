'use strict';
'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, AsyncStorage } from 'react-native';
import Button from '../components/button';
import Header from '../components/header';

import Login from './login';
import Account from './account';
import Firebase from 'firebase';

GLOBAL = require('../../Globals');
//From Global js we set the app variable
const app = GLOBAL.firebaseObject;

import styles from '../styles/common-styles.js';
//signup pageddd
console.log("Signup Page on.")
export default class signup extends Component {

  constructor(props){
    super(props);

    this.state = {
      loaded: true,
      email: '',
      password: ''
    };

    //just for giggles
    console.log("Constructor")



  }

  signup(){
    
    this.setState({
      loaded: false
    });

   

app.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function() {
console.log("Sign Up Successful, go to Account.dddd")
  this.props.navigator.push({
      component: Account
    });

}.bind(this), function(error) {
  // An error happened.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("ERROR WITH SIGNIN")
  console.log( errorMessage )
});


  }

  goToLogin(){
    this.props.navigator.push({
      component: Login
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header text="Signup" loaded={this.state.loaded} />
        <View style={styles.body}>
          
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder={"Email Address..calbe"}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder={"Password"}
          />
          <Button 
            text="Signup" 
            onpress={this.signup.bind(this)} 
            button_styles={styles.primary_button} 
            button_text_styles={styles.primary_button_text} />

          <Button 
            text="Got an Account?" 
            onpress={this.goToLogin.bind(this)} 
            button_styles={styles.transparent_button} 
            button_text_styles={styles.transparent_button_text} />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('signup', () => signup);
