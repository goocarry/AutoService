import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import Separator from '../components/Separator';

export default class PriceHelperScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: [
                {
                    "room": {
                        "price": 217,
                        "available": true
                    }
                },
                {
                    "room": {
                        "price": 302,
                        "available": true,
                    }
                },
                {
                    "room": {
                        "price": 427,
                        "available": true,
                    }
                }
            ]
        };
    }

    check = () => {
        var min = Math.min.apply(null, this.state.response.map((v) => v.room.price));
        alert(min);
    }


    render() {
        return (

            <View>
                <Text> PriceHelperScreen </Text>
                <TouchableOpacity onPress={this.check}>
                    <Text>check</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.response.room}
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item }) =>
                        <TouchableHighlight>
                            <View style={styles.flatview}>
                                <Text style={styles.name}>{item.price}</Text>
                                <Text style={styles.email}>{item.available}</Text>
                                <Separator />
                            </View>
                        </TouchableHighlight>
                    }
                    keyExtractor={item => item.name}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    h2text: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 36,
        fontWeight: 'bold',
    },
    flatview: {
        marginLeft: 20,
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