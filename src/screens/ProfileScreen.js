import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';

export default class ProfileScreen extends Component {
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
    //doing some stuff to change another picker
    //let modelsByBrand = this.state.models.find(item => item.brand_id === itemValue).name;
    //let lastname = //get lastname from val
    //and then this.setState lastname
    this.setState({ selectedBrand: itemValue });
    /*
        this.setState({
          modelsByBrand: this.state.models.find(item =>
            item.brand_id == itemValue)
        });
    */
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
    alert(JSON.stringify(this.state.modelsByBrand, null, 4))
  }

  renderModelPicker() {
    return (
      <Picker
        selectedValue={this.state.selectedModel}
        style={styles.input}>
        {
          
          this.state.modelsByBrand.map((item, key) => (
            <Picker.Item label={item.name} value={item.id} key={key} />)
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

        <Picker
          selectedValue={this.state.vata}
          style={styles.input}>
          {
            //<Picker.Item label={JSON.stringify(this.state.modelsByBrand.name)} value={JSON.stringify(this.state.modelsByBrand.name)} />
            <Picker.Item label={JSON.stringify(this.state.modelsByBrand, null, 4)} value="123" key="123" />
          }
        </Picker>


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