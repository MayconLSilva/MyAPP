/*import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';

import Login from '../LoginScreen';

const MainNav = createStackNavigator (

    {
        Login:{
            screen: Login,
            navigationOptions:{
                header: null
            }
        }
    }

)

export default createAppContainer(MainNav);*/

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';
//import * as React from 'react';
import React, { Component } from 'react';

import Page1 from '../LoginScreen';
import DashboardScreen from '../DashboardScreen';


const AppNavigator = createStackNavigator({

    Home: {
        screen: Page1,
        navigationOptions: {
            //header: null
            headerShown:false,//barra de header
            //headerLeft:null
            
        }
    },
    DashboardScreen:{
        screen: DashboardScreen,
        navigationOptions:{
            headerTitle:'Dashboard',
            headerLeft:null,
            headerShown:false
        }
    },



});

export default createAppContainer(AppNavigator);