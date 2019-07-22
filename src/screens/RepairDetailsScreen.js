import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'react-native-firebase';
import Separator from '../components/Separator';

export default class RepairDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    static navigationOptions = {
        title: 'Подробности о ремонте'
    }

    handleRemove = () => {
        const { params } = this.props.navigation.state;
        //alert(params.item);
        //let keys = Object.keys(params.item);
        //alert(keys);
        return firebase.database().ref('repairList/').child(params.item.id).remove();
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text>Сведения о ремонте</Text>
                <Separator />
                <Text>{params.item.repairDone}</Text>
                <Text>{params.item.datetime}</Text>
                <Text>{params.item.repairCosts}</Text>
                <Text>{params.item.parts}</Text>
                <Text>{params.item.partsCosts}</Text>
                <Separator />
                <TouchableOpacity onPress={this.handleRemove}>
                    <Text style={styles.btnText}>Удалить запись</Text>
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