//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import all basic components

export default class Screen2 extends Component {
  //Screen2 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput style={styles.input}
          placeholder='Nome:'
        />

        <TextInput style={styles.input}
          placeholder='Gerente:'
        />

        <TextInput style={styles.input}
          placeholder='Telefone:'
        />

        <TouchableOpacity
          style={styles.botaogravar}
          
        >
          <Text style={styles.textobotaogravar} >Gravar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    //paddingTop: 60,
    alignItems: 'center',
    marginTop: 30,
    //justifyContent: 'center',
  },
  input: {
    //marginTop: 20,
    marginBottom: 15,
    padding: 10,
    width: '90%',
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botaogravar: {
    width: '90%',
    height: 42,
    backgroundColor: '#3498db',
    //marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
},
textobotaogravar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
},
});