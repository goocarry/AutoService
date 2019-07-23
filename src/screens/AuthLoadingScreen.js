import React, {Component} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    //User.phoneNumber = await AsyncStorage.getItem('userPhone');

    Promise.all([User.phoneNumber = await AsyncStorage.getItem('userPhone'),
    User.city = await AsyncStorage.getItem('city')]);
    
    this.props.navigation.navigate(User.phoneNumber ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#486d9e' barStyle="default" />
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent:'center',
    justifyContent: 'center',
  }
})