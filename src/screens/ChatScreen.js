import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Picker, FlatList, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';


export default class ChatScreen extends Component {

  state = {
    users: []
  }

  componentWillMount() {
    let dbRef = firebase.database().ref('Users');
    dbRef.on('child_added', (val) => {
      let person = val.val();
      person.phone = val.key;
      this.setState((prevState) => {
        return {
          users: [...prevState.users, person]
        }
      })
    })
  }

  renderRow = ({ item }) => {
    return (
      <TouchableOpacity style={{padding:10, borderBottomColor:'#ccc', borderBottomWidth:1 }}>
        <Text style={{fontSize:20}}>{item.modelAuto}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={(item) => item.phone}
        >

        </FlatList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})