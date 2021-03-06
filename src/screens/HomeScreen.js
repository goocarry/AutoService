import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    StatusBar
} from 'react-native';
import Separator from '../components/Separator';
import { autoservices } from '../data/autoservice_db';

export default class App extends Component {

    static navigationOptions = {
        title: 'Автосервисы'
    }

    state = {
        autoservices: autoservices
    }

    render() {
        return (
            <View style={styles.container} >
                <StatusBar backgroundColor='#486d9e' barStyle="default" />
                <FlatList
                    data={this.state.autoservices}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Details', { item: item })}>
                            <View style={styles.flatview}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.email}>{item.address}</Text>
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