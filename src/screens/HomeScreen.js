import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';

export default class HomeScreen extends Component {
    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View>
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
