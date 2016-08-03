import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../components/styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

class ChatCard extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.firstName}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ChatCard--------------;
