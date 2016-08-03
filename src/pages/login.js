'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, AsyncStorage, ListView } from 'react-native';

//const FBSK = require('react-native-fbsdk');
import Button from '../components/button';
import Header from '../components/header';

import Signup from './signup';
import Account from './account';
import ActionButton from 'react-native-action-button';


GLOBAL = require('../../Globals');
//From Global js we set the app variable
const app = GLOBAL.firebaseObject;
console.log("Login")
import styles from '../styles/common-styles.js';






export default class login extends Component {

  constructor(props){
    super(props);

  

    this.state = {
      email: '',
      password: '',
      loaded: true
    }
  }



  render(){
    return (
      <View style={styles.container}>
        <Header text="Login" loaded={this.state.loaded} />
        <View style={styles.body}>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
            placeholder={"Email Addresszzzz"}
          />
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder={"Password"}
          />

          <Button
            text="Login"
            onpress={this.login.bind(this)}
            button_styles={styles.primary_button}
            button_text_styles={styles.primary_button_text} />
          <Button
            text="Facebook Login"
            onpress={this.facebooklogin.bind(this)}
            button_styles={styles.primary_button}
            button_text_styles={styles.primary_button_text} />
          <Button
            text="New here?"
            onpress={this.goToSignup.bind(this)}
            button_styles={styles.transparent_button}
            button_text_styles={styles.transparent_button_text} />
          <Text>Hello</Text>
          <Text> Test Stuff </Text>



            <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
          </ActionButton.Item>
        </ActionButton>

        </View>
      </View>
    );
  }

  facebooklogin(){
    console.log("Facebook Login Pressed")

    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');



  
    //need to change
    //http://stackoverflow.com/questions/30232432/react-native-app-and-facebook-sdk
    app.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        console.log("Facebook Logged in ")
        console.log( user )
        console.log(" ")


        var user = app.auth().currentUser;

          user.updateProfile({
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(function() {
            // Update successful.
          }, function(error) {
            // An error happened.
          });



        // ...
    }.bind(this), function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log("FACEBOOK_LOGIN_ERROR")
          console.log( errorMessage )
          console.log( email )
  // ...
      });


  }

login(){

    this.setState({
      loaded: false
    });

   

    app.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function() {

      console.log("Sign In, Go to login")
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

  goToSignup(){
    this.props.navigator.push({
      component: Signup
    });
  }

}

AppRegistry.registerComponent('login', () => login);