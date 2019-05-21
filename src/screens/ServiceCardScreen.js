import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { brands } from '../data/brand_db';
import firebase from 'react-native-firebase';
import ItemComponent from '../components/ItemComponent';


export default class ServiceCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  static navigationOptions = {
    title: 'Сервисная карта авто'
  }


  componentDidMount() {
    this.readUserData();
  }

  /*
  readUserData() {
    firebase.database().ref('repairList/').once('value', function (snapshot) {
      //console.log(snapshot.val())
      //alert(JSON.stringify(snapshot.val()))
    }).then(snapshot => this.setState({ repairList: JSON.stringify(snapshot.val())}));
  }
  */

  readUserData() {
    firebase.database().ref('repairList/').on('value', snapshot => {
      //console.log(snapshot.val())
      //alert(JSON.stringify(snapshot.val()))
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    })
  }

  check = () => {
    alert(this.state.items)
  }

  render() {
    return (
      <View style={styles.container} >
        <Text>ServiceCardScreen</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('RepairAdding')}>
          <Text style={styles.btnText}>Добавить новую запись</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.check}>
          <Text style={styles.btnText}>check</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          {this.state.items.length > 0 ? (
            <ItemComponent items={this.state.items} />
          ) : (
              <Text>No items</Text>
            )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    color: 'green',
  }
})