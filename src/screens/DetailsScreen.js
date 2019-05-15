import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    check = () => {
        //const item = this.props.navigation.getParam(item);
        const {params} = this.props.navigation.state;
        alert(params.item);
    }

    render() {
        return (
            <View>
                <Text> DetailsScreen </Text>
                <TouchableOpacity onPress={this.check}>
                    <Text>check</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
