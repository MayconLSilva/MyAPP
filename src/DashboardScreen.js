import * as WebBrowser from 'expo-web-browser';
//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import {Dimensions,View, Image, TouchableOpacity } from 'react-native';
// import all basic components

import Icon from 'react-native-vector-icons/FontAwesome';

//Import React Navigation
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

//Import external files
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

import CustomSidebarMenu from './components/CustomSidebarMenu';
//import { Icon } from 'react-native-vector-icons/Icon';
global.currentScreenIndex = 0;

class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}

            <Icon name="bars" size={30} color="#e5e5e5" style={{ width: 25, height: 25, marginLeft: 320 }}/>
            {/* 
            <Image
              source={require('../src/img/audi-logo.png')}//Icone menu slider              
              style={{ width: 25, height: 25, marginLeft: 320 }}
            />   
            */}

          </TouchableOpacity>
        </View>
      );
    }
  }

  const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: Screen1,
      navigationOptions: ({ navigation }) => ({
        title: 'Dashboard',// Nome do Header
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#848484',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
      screen: Screen2,
      navigationOptions: ({ navigation }) => ({
        title: 'Cadastro de Banco',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#848484',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  const Screen3_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
      screen: Screen3,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 3',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#848484',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  const DrawerNavigatorExample = createDrawerNavigator({
    //Drawer Optons and indexing
    Screen1: {
      //Title
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 11', //Nome do menu -- Não irá mudar o nome mais pois utilizo o CustomSlideBar
      },
    },
    Screen2: {
      //Title
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 2', //Nome do menu -- Não irá mudar o nome mais pois utilizo o CustomSlideBar
      },
    },
    Screen3: {
      //Title
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen 33',//Nome do menu -- Não irá mudar o nome mais pois utilizo o CustomSlideBar
      },
    },
  },
  
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
  
  );

  

  export default createAppContainer(DrawerNavigatorExample);