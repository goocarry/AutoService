import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import { brands } from '../data/brand_db';

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSecondPicker: false,
      selectedBrand: '',
      selectedModel: '',
      modelsByBrand: [],
      check: false,
      vata: '',
      brands: [
        {
          "id": 1,
          "name": "Nissan"
        },
        {
          "id": 2,
          "name": "Toyota"
        },
      ],
      ToyotaModels: [
        {
          "name": "camry"
        },
        {
          "name": "jopa"
        }
      ],
      NissanModels: [
        {
          "name": "juke"
        },
        {
          "name": "hui"
        }
      ]

    };
  }

  yourfunc = (itemValue, itemIndex) => {
    this.setState({ selectedBrand: itemValue });
    if (itemValue == 2) {
      this.setState({
        modelsByBrand: this.state.ToyotaModels
      })
    }
    else if (itemValue == 1) {
      this.setState({
        modelsByBrand: this.state.NissanModels
      })
    }
  }

  check = () => {
    //alert(this.state.modelsByBrand)
    //alert(JSON.stringify(this.state.modelsByBrand, null, 4))
    alert(this.state.selectedModel)
  }

  renderModelPicker() {
    return (
      <Picker
        selectedValue={this.state.selectedModel}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ selectedModel: itemValue })
        }>
        {

          this.state.modelsByBrand.map((item, key) => (
            <Picker.Item label={item.name} value={item.name} key={key} />)
          )

        }
      </Picker>
    )
  }

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.selectedBrand}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) =>
            //this.setState({ brandAuto: itemValue })
            this.yourfunc(itemValue, itemIndex)
          }>
          {
            this.state.brands.map((item, key) => (
              <Picker.Item label={item.name} value={item.id} key={key} />)
            )
          }
        </Picker>


        {!this.renderSecondPicker && this.renderModelPicker()}

        <TouchableOpacity onPress={this.check}>
          <Text style={styles.btnText}>check</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    color: 'green',
  }
})