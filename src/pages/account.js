
import React from 'react';
import { View, ListView, StyleSheet, Text, ScrollView } from 'react-native';

import FacebookTabBar from './FacebookTabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ActionButton from 'react-native-action-button';
import ListItem from './ListItem'

import ChatItem from '../components/ChatItem';
import Button from '../components/button';

GLOBAL = require('../../Globals');
//From Global js we set the app variable
const app = GLOBAL.firebaseObject;
console.log("joe")


class ListViewDemo extends React.Component {
constructor(props) {
  super(props);


 var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

  this.state = {
      refreshing: false,
      db: [],
      dataSource: ds.cloneWithRows([])
    };




  this.itemsRef = this.getRef().child('items');


}


componentDidMount() {
     this.fetchMessages();

}

fetchMessages(){
  console.log("Fetch messages")
  //temp set for now
  var testData = [{"firstName":"Black","lastName":"Garrett"},
{"firstName":"Morales","lastName":"Duncan"},
{"firstName":"Ramos","lastName":"King"},
{"firstName":"Dunn","lastName":"Collins"},
{"firstName":"Fernandez","lastName":"Montgomery"},
{"firstName":"Burns","lastName":"Fox"},
{"firstName":"Richardson","lastName":"Kim"},
{"firstName":"Hanson","lastName":"Evans"},
{"firstName":"Anderson","lastName":"Hunt"},
{"firstName":"Carter","lastName":"Grant"},
{"firstName":"Ray","lastName":"Ruiz"},
{"firstName":"Hart","lastName":"Schmidt"},
{"firstName":"White","lastName":"Andrews"},
{"firstName":"Hall","lastName":"Holmes"},
{"firstName":"Hawkins","lastName":"Gomez"},
{"firstName":"Bowman","lastName":"Sullivan"},
{"firstName":"Brooks","lastName":"Evans"},
{"firstName":"Reyes","lastName":"Perez"},
{"firstName":"Dixon","lastName":"Barnes"},
{"firstName":"Ward","lastName":"Lee"},
{"firstName":"Berry","lastName":"Payne"},
{"firstName":"Murray","lastName":"Rose"},
{"firstName":"Stephens","lastName":"Fowler"},
{"firstName":"Rodriguez","lastName":"Lewis"},
{"firstName":"Cook","lastName":"Dean"}];

console.log("Constructor is run yo")
console.log(testData)
console.log(" ")


var groupsRef = app.database().ref().child('messages').child('joe');
groupsRef.on('value', function(snap) {
  console.log("Hey Joe!!!nickuhas")
  
});





this.setState({
          db: testData,
          dataSource: this.state.dataSource.cloneWithRows(testData),
          loaded: true
        });

//end of fetchMessages
}

login(){
  console.log("ey")

              this.itemsRef.push({ title: "joe" })

}

 

  getRef() {
    return app.database().ref();
  }

 


 

  _renderItem(item) {
 
    
    return (
      <ListItem item={item}  />
    );
  }
    

  render() {
    return (
      <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={1}
      renderTabBar={() => <FacebookTabBar />}
      >

      <ScrollView tabLabel="ios-paper" style={styles.tabView}>
        <View style={styles.card}>
      
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listview}/>

          <Text>Jew!!!</Text>
          <Text>Jew!!!</Text>
   <Text>Jew!!!</Text>
          <Text>Jew!!!</Text>
             <Text>Jew!!!</Text>
          <Text>Jew!!!</Text>
              <Text>Jew!!!</Text>
          <Text>Jew!!!</Text>
   <Text>Jew!!!</Text>
          <Text>Jew!!!</Text>
             <Text>Jew!!!</Text>
          <Text>Jew!!!</Text>
        </View>

 
        
      </ScrollView>
      <ScrollView tabLabel="ios-people" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Friends</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Messenger</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Notifications</Text>
        </View>
      </ScrollView>
      <ScrollView tabLabel="ios-list" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Other nav</Text>
        </View>
      </ScrollView>
    </ScrollableTabView>



    );
  }
}


const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
    actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  appContainer:{
    flex: 1
  },
  titleView:{
    backgroundColor: '#48afdb',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  titleText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 20,
  },
  inputcontainer: {
    marginTop: 5,
    padding: 10,
    flexDirection: 'row'
  },
  button: {
    height: 36,
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#48afdb',
    justifyContent: 'center',
    color: '#FFFFFF',
    borderRadius: 4,
  },
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 6,
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48afdb',
    borderRadius: 4,
    color: '#48BBEC'
  },
  row: {
    flexDirection: 'row',
    padding: 12,
    height: 44
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  todoText: {
    flex: 1,
  },
  primary_button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#529ecc'
  },
  primary_button_text: {
    color: '#FFF',
    fontSize: 18
  },
    listview: {
    flex: 1,
  }
});
export default ListViewDemo;



