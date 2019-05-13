import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

export default class ProfileScreen extends Component {
  constructor() {
    super()
    this.state = {
      brandAuto: null,
      modelAuto: null,
      options: [
        {
          label: 'Toyota',
          value: 'Toyota',
          key: 'Toyota-key',
          dynamicValues: [
            {
              label: 'Camry',
              value: 'Camry',
              key: 'Camry-key',
            },
            {
              label: 'Land Cruizer',
              value: 'Land Cruizer',
              key: 'Land Cruizer-key',
            }
          ]
        },
        {
          label: 'Nissan',
          value: 'Nissan',
          key: 'Nissan-key',
          dynamicValues: [
            {
              label: 'Pathfinder',
              value: 'Pathfinder',
              key: 'Pathfinder-key',
            },
            {
              label: 'X-Trail',
              value: 'X-Trail',
              key: 'X-Trail-key',
            }
          ]
        }
      ]
    }
  }

  render() {
    const { options, brandAuto, modelAuto } = this.state

    return (
      <View>
        <Picker brandAuto={brandAuto} onValueChange={(value) => { this.setState({ brandAuto: value }) }}>
          {options.map(option => <Picker.Item key={`${option.key}`} label={`${option.label}`} value={`${option.value}`} />)}
        </Picker>

        {brandAuto ?
          <Picker brandAuto={modelAuto} onValueChange={(value) => { this.setState({ modelAuto: value }) }}>
            {options.filter(option => brandAuto === option.value)
              .map(option => option.dynamicValues.map(dynamicOption =>
                <Picker.Item key={`${dynamicOption.key}`} label={`${dynamicOption.label}`} value={`${dynamicOption.value}`} />
              ))
            }
          </Picker> :
          <View />
        }
      </View>
    )
  }
}
