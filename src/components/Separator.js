import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  //for avatar place
  separatorOffset: {
    //flex: 2,
    flex: 1,
    flexDirection: 'row',
  },
  separator: {
    //flex: 8,
    flex: 10,
    flexDirection: 'row',
    borderColor: '#EDEDED',
    borderWidth: 0.8,
  },
})

//Add <View style={styles.separatorOffset} /> for avatar
const Separator = () => (
  <View style={styles.container}>
    <View style={styles.separator} />
  </View>
)

export default Separator