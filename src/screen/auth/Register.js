import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, TextInput, Button } from 'react-native';

import env from '../../env/env'
import axios from 'axios'

export default class Register extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    onRegist = () => {
        let passwordValidation = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
        if (this.state.password.match(passwordValidation)) {
            this.actRegistAsync();
        } else {
            alert('Password terlalu lemah')
        }
    }

    actRegistAsync = async () => {
        try {
            //Fetch Data USERNAME dan PASSWORD API , LALU PENGECEKAN , JIKA MATCH BERI TOKEN
            let tempUser = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
            console.warn(tempUser)
            await axios.post(env.host + 'register', tempUser)
                .then((response) => {
                    alert(response.message)
                    this.props.navigation.navigate('PublicNav')
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
                <Image source={require('../../assets/undraw_mobile_login_ikmv.png')} style={{ width: 150, height: 150 }} />
                <Text style={styles.text}>Username</Text>
                <View style={styles.borderTextInput}>
                    <TextInput onChangeText={(username) => this.setState({ username })} style={styles.inputField}></TextInput>
                </View>
                <Text style={styles.text}>Email</Text>
                <View style={styles.borderTextInput}>
                    <TextInput onChangeText={(email) => this.setState({ email })} style={styles.inputField} ></TextInput>
                </View>
                <Text style={styles.text}>Password</Text>
                <View style={styles.borderTextInput}>
                    <TextInput secureTextEntry={true} onChangeText={(password) => this.setState({ password })} style={styles.inputField}></TextInput>
                </View>
                <Button onPress={this.onRegist} title='create account' color='#00a663'></Button>
                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <Text>Have account?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={{ color: '#1dd1a1' }}> Log in</Text></TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    text: {
        paddingLeft: 8,
        fontWeight: 'bold'
    },
    field: {
        marginLeft: 8,
        marginTop: 30,
        marginBottom: 50,
        marginRight: 8
    },
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
})