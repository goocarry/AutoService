import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight
} from 'react-native';
import { users } from '../data/users_db';

export default class App extends Component {

    static navigationOptions = {
        title: 'Автосервисы'
    }

    state = {
        users: users
    }

    render() {
        return (
            <View style={styles.container} >
                <FlatList
                    data={this.state.users}
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item }) =>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProfileTab')}>
                            <View style={styles.flatview}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.email}>{item.email}</Text>
                            </View>
                        </TouchableHighlight>
                    }
                    keyExtractor={item => item.email}
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