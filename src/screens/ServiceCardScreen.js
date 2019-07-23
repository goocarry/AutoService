import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, TouchableHighlight, StatusBar } from 'react-native';
import { brands } from '../data/brand_db';
import firebase from 'react-native-firebase';
import ItemComponent from '../components/ItemComponent';
import Separator from '../components/Separator';
import User from '../User';


export default class ServiceCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  static navigationOptions = {
    title: 'История обслуживания'
  }

  componentDidMount() {
    this.readUserData();
  }

  /*
  readUserData() {
    firebase.database().ref('repairList/').once('value', function (snapshot) {
      //console.log(snapshot.val())
      //alert(JSON.stringify(snapshot.val()))
    }).then(snapshot => this.setState({ repairList: JSON.stringify(snapshot.val())}));
  }
  */

  readUserData() {
    firebase.database().ref(User.city + '/Users/' + User.phoneNumber + '/repairList/').on('value', snapshot => {
      //console.log(snapshot.val())
      //alert(JSON.stringify(snapshot.val()))
      //alert(JSON.stringify(Object.keys(snapshot.val())));
      let data = snapshot.val();

      //TODO обработчик if null, т.к. Object.values не может в null
      let items = Object.values(data);
      this.setState({ items });
    })
  }

  check = () => {
    alert(this.state.items)
  }

  render() {
    /*
    return(
      <View style={styles.container} >
                <StatusBar backgroundColor='#486d9e' barStyle="default" />
                <FlatList
                    data={this.state.items}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('RepairAdding', { item: item })}>
                            <View style={styles.flatview}>
                                <Text style={styles.name}>{item.repairDone}</Text>
                                <Text style={styles.name}>{item.datetime}</Text>
                                <Text style={styles.email}>{item.repairCosts}</Text>
                                <Separator />
                            </View>
                        </TouchableHighlight>
                    }
                    keyExtractor={item => item.name}
                />
            </View>
    )
    */

    return (
      <View style={styles.container} >
        <StatusBar backgroundColor='#486d9e' barStyle="default" />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.buttonContainerAdd}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('RepairAdding')}>
              <Text style={styles.btnTextAdd}>Добавить запись</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={this.state.items}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('RepairDetails', { item: item })}>
              <View style={styles.flatview}>
                <Text style={styles.name}>{item.repairDone}</Text>
                <Text style={styles.email}>Дата:{item.datetime}</Text>
                <Text style={styles.email}>Стоимость:{item.repairCosts}</Text>
                <Separator />
              </View>
            </TouchableHighlight>
          }
          keyExtractor={item => item.repairDone}
        />
      </View >
    );


    /*
    return (
      <View style={styles.container} >
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <View style={styles.buttonContainerAdd}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('RepairAdding')}>
              <Text style={styles.btnTextAdd}>Добавить запись</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainerDelete}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('RepairAdding')}>
              <Text style={styles.btnTextDelete}>Удалить запись</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.historyTextView}>
          <Text style={styles.historyText}>История обслуживания</Text>
        </View>
        <FlatList
          data={this.state.items}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <View style={styles.flatview}>
              <Text style={styles.name}>{item.repairDone}</Text>
              <Text style={styles.email}>Дата:{item.datetime}</Text>
              <Text style={styles.email}>Стоимость:{item.repairCosts}</Text>
              <Text style={styles.email}>Зап.части:{item.parts}</Text>
              <Text style={styles.email}>Стоимость зап.частей:{item.partsCosts}</Text>
              <Separator />
            </View>
          }
          keyExtractor={item => item.repairDone}
        />
      </View >
    );
    */
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
    fontSize: 18,
    color: '#486d9e'
  },
  email: {
    fontFamily: 'Verdana',
  },
  btnTextAdd: {
    fontSize: 15,
    color: 'white',
  },
  btnTextDelete: {
    fontSize: 15,
    color: 'white',
  },
  buttonContainerAdd: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#486d9e',
    borderRadius: 5
  }
});