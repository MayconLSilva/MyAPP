//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import {StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import all basic components

export default class Screen1 extends Component {
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen 1 </Text>
        <Icon name="bars" size={30} color="#900" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});