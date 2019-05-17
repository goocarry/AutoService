import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        title: 'Подробная информация'
    }

    showFrontSideServices = () => {
        //const item = this.props.navigation.getParam(item);
        const { params } = this.props.navigation.state;
        //alert(params.item.name);
        //alert(JSON.stringify(params.item.frontSideServices));
        this.props.navigation.navigate('FrontSideServices', { item: params.item.frontSideServices });
    }

    showBackSideServices = () => {
        //const item = this.props.navigation.getParam(item);
        const { params } = this.props.navigation.state;
        //alert(params.item.name);
        //alert(JSON.stringify(params.item.backSideServices));
        this.props.navigation.navigate('BackSideServices', { item: params.item.backSideServices });
    }

    showMotorServices = () => {
        //const item = this.props.navigation.getParam(item);
        const { params } = this.props.navigation.state;
        //alert(params.item.name);
        //alert(JSON.stringify(params.item.motorServices));
        this.props.navigation.navigate('MotorServices', { item: params.item.motorServices });
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text style={styles.h2text}>{params.item.name}</Text>
                <TouchableOpacity onPress={this.showFrontSideServices}>
                    <Text>Ремонт передней подвески</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.showBackSideServices}>
                    <Text>Ремонт задней подвески</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.showMotorServices}>
                    <Text>Ремонт ДВС</Text>
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
    h2text: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
    },
    flatview: {
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 20,
        borderRadius: 2,
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 18
    },
    email: {
        color: 'red'
    }

});