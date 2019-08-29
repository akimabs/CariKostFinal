import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { DefaultTheme, Provider } from 'react-native-paper'

import Explore from '../screen/explore/Explore'
import List from '../screen/explore/city/list'
import Detail from '../screen/explore/city/detail'
import PublicNav from './public-nav'
import PrivateNav from './private-nav'
import Register from '../screen/auth/Register'
import Filter from '../components/pub/filter'

const StackPublic = createStackNavigator({
    Filter: {
        screen: Filter
    },
    Register: {
        screen: Register
    },
    PrivateNav: {
        screen: PrivateNav
    },
    Explore: {
        screen: Explore,
        headerMode: 'none'
    },
    List: { screen: List },
    Detail: {
        screen: Detail,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#00a663'
            },
            headerTintColor: 'white'
        }
    },
    PublicNav: { screen: PublicNav }
}, {
        initialRouteName: 'PublicNav',
        headerMode: 'none'
    })

class PublicStack extends Component {
    render() {
        return (
            <Provider theme={theme}>
                <PublicStack />
            </Provider>
        )
    }
}

export default StackPublic