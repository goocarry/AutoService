import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'react-native-firebase';

export default class RepairAddingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repairDone: '',
            repairCosts: '',
            parts: '',
            partsCosts: ''
        }
    }

    static navigationOptions = {
        title: 'Новая запись о ремонте'
    }

    handleChange = key => val => {
        this.setState({ [key]: val })
    }


    writeData = () => {
        firebase.database().ref('repairList/').push({
            repairDone: this.state.repairDone,
            repairCosts: this.state.repairCosts,
            parts: this.state.parts,
            partsCosts: this.state.partsCosts,
            datetime: Date.now()
        }).then((data) => {
            //success callback
            alert('Запись успешно сохранена')
        }).catch((error) => {
            //error callback
            alert('error ', error)
        })
    }

    handleChange = key => val => {
        this.setState({ [key]: val })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Что ремонтировали?</Text>
                <TextInput
                    placeholder="Введите запись о ремонте"
                    style={styles.input}
                    value={this.state.phoneNumber}
                    onChangeText={this.handleChange('repairDone')}
                >
                </TextInput>
                <Text>Стоимость ремонта</Text>
                <TextInput
                    placeholder="Введите запись о ремонте"
                    style={styles.input}
                    value={this.state.phoneNumber}
                    onChangeText={this.handleChange('repairCosts')}
                >
                </TextInput>
                <Text>Использованные зап.части</Text>
                <TextInput
                    placeholder="Введите запись о ремонте"
                    style={styles.input}
                    value={this.state.phoneNumber}
                    onChangeText={this.handleChange('parts')}
                >
                </TextInput>
                <Text>Стоимость зап.частей</Text>
                <TextInput
                    placeholder="Введите запись о ремонте"
                    style={styles.input}
                    value={this.state.phoneNumber}
                    onChangeText={this.handleChange('partsCosts')}
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
})