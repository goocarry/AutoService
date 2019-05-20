import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { brands } from '../data/brand_db';
import firebase from 'firebase';


export default class ServiceCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work:''
    }
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
  }


  writeData = () => {
    firebase.database().ref('workList/').push({
      work: this.state.work,
      datetime: Date.now()
    }).then((data) => {
      //success callback
      alert('Запись успешно сохранена')
    }).catch((error) => {
      //error callback
      alert('error ', error)
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>ServiceCardScreen</Text>
        <TextInput
          placeholder="Введите запись о ремонте"
          style={styles.input}
          value={this.state.phoneNumber}
          onChangeText={this.handleChange('work')}
        >
        </TextInput>
        <TouchableOpacity onPress={this.writeData}>
          <Text style={styles.btnText}>Записать</Text>
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