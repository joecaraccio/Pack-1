/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  AsyncStorage,
  Navigator,
  Text,
  View
} from 'react-native';
const styles2 = require('./styles.js')

const button = require('./src/components/button.js');


import Signup from './src/pages/signup';
import Account from './src/pages/account';
import Header from './src/components/header';


//import Firebase from 'firebase';
//let app = new Firebase("YOUR-FIREBASE-APP-URL");



console.log("Welcome to Pack");
console.log("Loading ")
console.log("hey Joe")
/*
class PackJuly extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Reactdfasdl Natiggggve! Hellod
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}
*/
console.log("Hey joe")


class PackJuly extends Component {    

  constructor(props){
    super(props);
    this.state = {
      component: null,
      loaded: false
    };
  }

  componentWillMount(){

    AsyncStorage.getItem('user_data').then((user_data_json) => {

      let user_data = JSON.parse(user_data_json);
      let component = {component: Signup};
      if(user_data != null){
        app.authWithCustomToken(user_data.token, (error, authData) => {
          if(error){
            this.setState(component);
          }else{
            this.setState({component: Account});
          }
        });
      }else{
        this.setState(component);
      }
    });

  }

  render(){

    if(this.state.component){
      return (
        <Navigator
          initialRoute={{component: this.state.component}}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            if(route.component){
              return React.createElement(route.component, { navigator });
            }
          }}
        />
      );
    }else{
      return (
        <View style={styles.container}>
          <Header text="React Native Firebase Auth" loaded={this.state.loaded} />  
          <View style={styles.body}></View>
        </View>
      );
    }

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PackJuly', () => PackJuly);
