import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Appbar } from 'react-native-paper'


export default class City extends Component {

    constructor(props) {
        super(props);
        this.state = {
            houses: houses
        }
    }

    render() {
        const { params } = this.props.navigation.state;
        const otherParam = params ? params.otherParam : null;

        return (
            <View style={styles.wrapper} >
                <StatusBar
                    backgroundColor='white'
                    barStyle='dark-content'
                />
                <View style={styles.header}>
                    <Appbar.Header>
                        <Appbar.BackAction
                            onPress={() => this.props.navigation.navigate('Explore')}
                        />
                        <TextInput style={styles.header} placeholder={JSON.stringify(otherParam)} />
                    </Appbar.Header>
                </View>
                <AppIndex />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: 'white',
        height: 58,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }, title: {
        fontWeight: 'bold',
        color: "#00a663",
        fontSize: 20
    }
});  