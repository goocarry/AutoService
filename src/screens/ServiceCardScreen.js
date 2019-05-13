import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {brands} from '../data/brand_db';

export default class ServiceCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {brands.map((brand, index) => <Text>{brand.name}</Text>)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})
