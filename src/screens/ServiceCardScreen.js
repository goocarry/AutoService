import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { brands } from '../data/brand_db';
import firebase from 'react-native-firebase';


export default class ServiceCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static navigationOptions = {
    title: 'Сервисная карта авто'
  }

  goto = () => {
    
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>ServiceCardScreen</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('RepairAdding')}>
          <Text style={styles.btnText}>Добавить новую запись</Text>
        </TouchableOpacity>
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