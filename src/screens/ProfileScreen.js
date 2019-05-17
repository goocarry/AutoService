import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';

export default class ProfileScreen extends Component {

  _logOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View>
        <Text>Profile Screen</Text>
        <Text>
          {User.phoneNumber}
        </Text>
        <TouchableOpacity onPress={this._logOut}>
          <Text>Выйти</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    color: 'green',
  }
})