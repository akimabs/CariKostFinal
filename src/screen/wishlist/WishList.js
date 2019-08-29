import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, YellowBox } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

YellowBox.ignoreWarnings(['ViewPagerAndroid']);
const AppIndex = createAppContainer(AppNavigator)
import AppNavigator from './lib/routes';

export default class WishList extends Component {
    render() {
        return (
            <View style={styles.wrapper} >
                <StatusBar
                    backgroundColor='white'
                    barStyle='dark-content'
                />
                <View style={styles.header}>
                    <Text style={styles.title}>wishlistku</Text>
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
        paddingLeft: 15,
        paddingRight: 15
    }, title: {
        fontWeight: 'bold',
        color: "#00a663",
        fontSize: 20
    }
});  