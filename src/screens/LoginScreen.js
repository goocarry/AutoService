import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, TextInput, View, Alert, Picker, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';
import { brands } from '../data/brand_db';
import { models } from '../data/models_db';

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

  check = () => {
    alert(this.state.brandAuto)
  }

  submitForm = async () => {
    if (this.state.phoneNumber.length < 10) {
      Alert.alert('Неверный номер телефона')
    }
    else if (this.state.brandAuto.length < 3) {
      Alert.alert('Неверная марка авто')
    }
    else {
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
        <Text>Введите номер телефона..</Text>
        <TextInput
          placeholder="Введите номер телефона"
          keyboardType="number-pad"
          style={styles.input}
          value={this.state.phoneNumber}
          onChangeText={this.handleChange('phoneNumber')}
        >
        </TextInput>
        <Text>Выберите марку автомобиля..</Text>
        <Picker
          selectedValue={this.state.brandAuto}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ brandAuto: itemValue })
          }>
          {
            brands.map((item, key) => (
              <Picker.Item label={item.name} value={item.id} key={key} />)
            )
          }
        </Picker>
        <Text>Выберите модель автомобиля..</Text>
        <Picker
          selectedValue={this.state.modelAuto}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ modelAuto: itemValue })
          }>
          {
            models.map((item, key) => (
              <Picker.Item label={item.name} value={item.name} key={key} />)
            )
            /*
            models.find(item => item.brand_id === this.state.brandAuto).map((item, key) => (
              <Picker.Item label={item.name} value={item.name} key={key} />)
            )
            
            models.map((item, key) => (
              <Picker.Item label={item.name} value={item.name} key={key} />)
            )
            */

          }
        </Picker>
        <TouchableOpacity onPress={this.submitForm}>
          <Text style={styles.btnText}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.check}>
          <Text style={styles.btnText}>check</Text>
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
    color: 'green',
  }
});
