import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    showFrontSideServices = () => {
        //const item = this.props.navigation.getParam(item);
        const {params} = this.props.navigation.state;
        //alert(params.item.name);
        alert(JSON.stringify(params.item.frontSideServices));
    }

    showBackSideServices = () => {
        //const item = this.props.navigation.getParam(item);
        const {params} = this.props.navigation.state;
        //alert(params.item.name);
        alert(JSON.stringify(params.item.backSideServices));
    }

    showMotorServices = () => {
        //const item = this.props.navigation.getParam(item);
        const {params} = this.props.navigation.state;
        //alert(params.item.name);
        alert(JSON.stringify(params.item.motorServices));
    }

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text>{params.item.name}</Text>
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
        alignItems: 'center'
    }
})
