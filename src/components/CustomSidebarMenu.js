//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      //'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';
      'https://logodownload.org/wp-content/uploads/2014/02/ford-logo-1.png';
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
        navOptionThumb: 'home',
        navOptionName: 'Home',
        screenToNavigate: 'Screen1',
      },
      {
        navOptionThumb: 'attach-money',
        navOptionName: 'Banco',
        screenToNavigate: 'Screen2',
      },
      {
        navOptionThumb: 'inbox',
        navOptionName: 'Categorias',
        screenToNavigate: 'Screen3',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
          source={{ uri: this.proileImage }}
          //source={require('../img/audi-logo.png')}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',//cor divisão logo a menus
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,                                 //Cor menu clicado / Cor menu não clicado
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>               
                <Icon name={item.navOptionThumb} size={25} color="#808080" />                 
              </View>              
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',//Cor slider
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});