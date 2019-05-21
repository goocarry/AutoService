import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { brands } from '../data/brand_db';
import firebase from 'react-native-firebase';
import ItemComponent from '../components/ItemComponent';
import Separator from '../components/Separator';


export default class ServiceCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  static navigationOptions = {
    title: 'Сервисная карта авто'
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
    firebase.database().ref('repairList/').on('value', snapshot => {
      //console.log(snapshot.val())
      //alert(JSON.stringify(snapshot.val()))
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    })
  }

  check = () => {
    alert(this.state.items)
  }

  //render with ItemComponent
  /*
  render() {
    return (
      <View style={styles.container} >
        <Text>ServiceCardScreen</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('RepairAdding')}>
          <Text style={styles.btnText}>Добавить новую запись</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.check}>
          <Text style={styles.btnText}>check</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          {this.state.items.length > 0 ? (
            <ItemComponent items={this.state.items} />
          ) : (
              <Text>No items</Text>
            )}
        </View>
      </View>
    );
  }
  */
  render() {
    return (
      <View style={styles.container} >
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('RepairAdding')}>
            <Text style={styles.btnText}>Добавить новую запись</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('RepairAdding')}>
            <Text style={styles.btnText}>Удалить запись</Text>
          </TouchableOpacity>
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
              <Text style={styles.email}>{item.repairCosts}</Text>
              <Text style={styles.email}>{item.parts}</Text>
              <Text style={styles.email}>{item.partsCosts}</Text>
              <Separator />
            </View>
          }
          keyExtractor={item => item.repairDone}
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
  },
  btnText: {
    fontSize: 20,
    color: 'green',
  },
  historyTextView: {
    alignItems: 'center', 
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    borderRadius: 2,
  },
  historyText: {
    fontSize: 20,
    color: 'green',
  }
});