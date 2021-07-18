import * as WebBrowser from 'expo-web-browser';
//import * as React from 'react';
import React, { useState, useEffect, Component } from 'react';
import {BackHandler, StatusBar, Keyboard, Animated, Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, TextInput, View, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { render } from 'react-dom';


export default function LoginScreen({navigation}) {

    componentWillMount = () => {
        BackHandler.addEventListener('hardwareBackPress', () => false);
      }

    clicou = () => {
        Alert.alert("teste", "chamou aqui");
    }

    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }));

    useEffect(() => {
        keboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
            })
        ]).start();

    }, []);

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 55,
                duration: 100,
            }),
            Animated.timing(logo.y, {
                toValue: 65,
                duration: 100,
            }),
        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 130,
                duration: 100,
            }),
            Animated.timing(logo.y, {
                toValue: 155,
                duration: 100,
            }),
        ]).start();

    }

    ////contentContainerStyle={styles.box} behavior="position" enabled
    return (
        <KeyboardAvoidingView style={styles.background}>



            <View style={styles.containerlogo}>
                <Animated.Image
                    style={{
                        width: logo.x,
                        height: logo.y,
                    }}
                    source={require('../src/img/logo.png')}
                //style={styles.logo}
                />
            </View>

            <Animated.View style={[
                styles.container,
                {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }
            ]}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu CPF/CNPJ'
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder='Digite sua senha'
                />
                <TouchableOpacity
                    style={styles.botaologin}
                    //onPress={() => { this.clicou() }}
                    //onPress={() => { this.props.navigation.navigate('DashboardScreen') }}
                    //onPress={() => this.props.navigation.navigate('DashboardScreen') }
                    onPress={() => navigation.navigate('DashboardScreen') }

                >
                    <Text style={styles.textlogin} >Login</Text>
                </TouchableOpacity>
            </Animated.View>

        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#848484',
        /*
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        height: 80,
        padding: 10,
        alignContent: 'center',
        borderTopColor: '#FFF',
        borderTopWidth: 1,
        */
    },
    ajuste: {
        width: '85%',
    },
    container: {
        flex: 1,
        //backgroundColor: '#848484',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50,
    },
    containerlogo: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 130,
        height: 155,
        borderRadius: 100,
    },
    input: {
        //marginTop: 10,
        marginBottom: 15,
        padding: 10,
        width: '90%',
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
    },
    botaologin: {
        width: '90%',
        height: 42,
        backgroundColor: '#3498db',
        //marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textlogin: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    }
});
