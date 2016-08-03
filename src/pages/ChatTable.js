import React from 'react';
import {
  View,
  StyleSheet,
  ListView,
  RefreshControl,
  Image,
  Text
} from 'react-native';

console.log("ChatTable Online")

class ChatTable extends React.Component {


	constructor(props){
    super(props);
 
    this.state = {
      date: STORE.date,
      refreshing: false,
      db: [],
      dataSource: ds.cloneWithRows([]),
      loaded: false,
      gamesToday: false
    }
    this.onRefresh = this.onRefresh.bind(this);
  }

}