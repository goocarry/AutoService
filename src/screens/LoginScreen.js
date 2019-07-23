import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, TextInput, View, Alert, Picker, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';
import { brands } from '../data/brand_db';
import { models } from '../data/models_db';
import { ToyotaModels } from '../data/ToyotaModels';
import { NissanModels } from '../data/NissanModels';
import firebase from 'react-native-firebase';
import { cities } from '../data/city_db';

const logoUri = 'https://www.freelogodesign.org/file/app/client/thumb/d53926c2-8b5d-4478-93b1-24ca02961be8_1000x600-watermark.png?20190528';

export default class LoginScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    city: cities,
    selectedCity: '',
    phoneNumber: '+7',
    brandAuto: '',
    modelAuto: '',
    selectedBrand: '',
    selectedModel: '',
    modelsByBrand: [],
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
  }

  submitForm = async () => {
    if (this.state.phoneNumber.length < 10) {
      Alert.alert('Неверный номер телефона')
    }
    else if (this.state.selectedBrand.length < 3) {
      Alert.alert('Выберите марку авто')
    }
    else if (this.state.selectedCity.length < 3) {
      Alert.alert('Выберите город')
    }
    else {
      //alert(this.state.phoneNumber + '/n' + this.state.brandAuto)
      //save user data
      //await AsyncStorage.setItem('userPhone', this.state.phoneNumber);
      await Promise.all([AsyncStorage.setItem('userPhone', this.state.phoneNumber), AsyncStorage.setItem('city', this.state.selectedCity)]);
      
      User.phoneNumber = this.state.phoneNumber;
      User.city = this.state.selectedCity;
      firebase.database().ref(User.city + '/Users/' + User.phoneNumber).set({brandAuto: this.state.selectedBrand, modelAuto: this.state.selectedModel});
      this.props.navigation.navigate('App');
    }
  }

  yourfunc = (itemValue, itemIndex) => {
    this.setState({ selectedBrand: itemValue });
    if (itemValue == 2) {
      this.setState({
        modelsByBrand: ToyotaModels
      })
    }
    else if (itemValue == 1) {
      this.setState({
        modelsByBrand: NissanModels
      })
    }
  }

  //render with phone number and all brands and all models but not connected by choice
  /*
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
  */

  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: logoUri }} style={{ width: 180, height: 180, marginBottom: 25 }} />
        <Text>Введите номер телефона..</Text>
        <TextInput
          placeholder="Введите номер телефона"
          keyboardType="number-pad"
          style={styles.input}
          value={this.state.phoneNumber}
          onChangeText={this.handleChange('phoneNumber')}
        >
        </TextInput>
        <Text>Выберите город..</Text>
        <Picker
          selectedValue={this.state.selectedCity}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ selectedCity: itemValue })
          }>
          {
            cities.map((item, key) => (
              <Picker.Item label={item.name} value={item.name} key={key} />)
            )
          }
        </Picker>
        <Text>Выберите марку автомобиля..</Text>
        <Picker
          selectedValue={this.state.selectedBrand}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>
            //this.setState({ brandAuto: itemValue })
            this.yourfunc(itemValue, itemIndex)
          }>
          {
            brands.map((item, key) => (
              <Picker.Item label={item.name} value={item.id} key={key} />)
            )
          }
        </Picker>
        <Text>Выберите модель автомобиля..</Text>
        <Picker
          selectedValue={this.state.selectedModel}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ selectedModel: itemValue })
          }>
          {
            this.state.modelsByBrand.map((item, key) => (
              <Picker.Item label={item.name} value={item.name} key={key} />)
            )
          }
        </Picker>
        <TouchableOpacity style={styles.button} onPress={this.submitForm}>
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
    color: 'white',
  },
  button: {
    padding: 15,
    backgroundColor: '#486d9e',
    borderRadius: 5,
  }
});
