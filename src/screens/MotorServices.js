import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class MotorServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Ремонт ДВС'
  }

  showMotorServices = () => {
    //const item = this.props.navigation.getParam(item);
    const { params } = this.props.navigation.state;
    //alert(params.item.name);
    alert(JSON.stringify(params.item));
    //this.props.navigation.navigate('MotorServices', { item: params.item.motorServices });
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.showMotorServices}>
          <Text>Ремонт ДВС</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
