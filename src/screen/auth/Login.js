import React, { Component } from 'react';
import { Text, Image, View, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

import env from '../../env/env'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            userToken: '',
            tmpUSer: ''
        }
    }

    isLogin = async () => {
        try {
            let tempUser = {
                email: this.state.email,
                password: this.state.password
            }

            await axios.post(env.host + 'login', tempUser)
                .then((response) => {
                    if (typeof response.data.token !== 'undefined') {
                        alert(response.data.message)
                        AsyncStorage.setItem('userToken', response.data.token);
                        this.props.navigation.navigate('PrivateStack')
                    } else {
                        alert('Email or Password went wrong')
                    }
                })
                .catch((error) => {
                    alert(error)
                });
        }
        catch (e) { }
    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image source={require('../../assets/undraw_Login_v483.png')} style={{ width: 150, height: 150 }} />
                <View style={style.borderTextInput}>
                    <TextInput placeholder='Email' onChangeText={(email) => this.setState({ email })} style={style.inputField} ></TextInput>
                </View>
                <View style={style.borderTextInput}>
                    <TextInput secureTextEntry={true} placeholder='Password' onChangeText={(password) => this.setState({ password })} style={style.inputField}></TextInput>
                </View>
                <Button onPress={this.isLogin} title='sign in' color='#00a663'></Button>

                <View style={{ flexDirection: 'row', paddingTop: 10 }}>

                    <Text>No account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}><Text style={{ color: '#00a663' }}> Create One</Text></TouchableOpacity>

                </View>

            </View>
        )
    }
}

const style = StyleSheet.create({
    borderTextInput: {
        borderRadius: 10,
        borderWidth: 1,
        height: 40,
        borderColor: 'grey',
        marginBottom: 10
    },
    inputField: {
        width: 300,
        height: 40,
        color: 'black',
        textAlign: 'center'
    },
    login: {
        fontSize: 40
    }
}
)