import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, TextInput, View, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';

export default class LoginScreen extends Component {

  static navigationOptions = {
      header: null
  }

  state = {
    phoneNumber: '+7',
    brandAuto: '',
    modelAuto: ''
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
  }

  submitForm = async () => {
    if(this.state.phoneNumber.length<10){
      Alert.alert('Неверный номер телефона')
    }
    else if(this.state.brandAuto.length<3){
      Alert.alert('Неверная марка авто')
    }
    else{
      //alert(this.state.phoneNumber + '/n' + this.state.brandAuto)
      //save user data
      await AsyncStorage.setItem('userPhone', this.state.phoneNumber);
      User.phoneNumber = this.state.phoneNumber;
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        placeholder="Введите номер телефона"
        keyboardType="number-pad"
        style={styles.input}
        value={this.state.phoneNumber}
        onChangeText={this.handleChange('phoneNumber')}
        >
        </TextInput>
        <TextInput
        placeholder="Выберите марку авто"
        style={styles.input}
        value={this.state.brandAuto}
        onChangeText={this.handleChange('brandAuto')}
        >
        </TextInput>
        <TextInput
        placeholder="Выберите модель авто"
        style={styles.input}
        value={this.state.modelAuto}
        onChangeText={this.handleChange('modelAuto')}
        >
        </TextInput>
        <TouchableOpacity onPress={this.submitForm}>
          <Text style={styles.btnText}>Войти</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    padding: 10, 
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginBottom: 10,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    color:'green',
  }
});
