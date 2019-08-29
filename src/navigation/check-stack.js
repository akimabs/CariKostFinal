import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    View,
    Text
} from "react-native";
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage'


class CheckStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: 'false'
        }
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        // const userToken = await AsyncStorage.getItem('userObj');
        try {
            const fetchData = await AsyncStorage.getItem('userToken')
            if (fetchData != null) {
                this.props.navigation.navigate('PrivateStack')
            } else {
                this.props.navigation.navigate('PublicStack')
            }
        } catch (e) {
            alert(e)
        }
    }

    render() {
        return (
            // <View>
            //   <ActivityIndicator />
            //   <StatusBar barStyle="default" />
            // </View>
            <View style={[styles.container, styles.horizontal]}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>HARAP TUNGGU...</Text>
                <ActivityIndicator size={50} color="#00a663" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

//export default App;
export default CheckStack;