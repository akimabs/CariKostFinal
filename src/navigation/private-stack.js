import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"
import { DefaultTheme, Provider } from 'react-native-paper'

import Explore from '../screen/explore/Explore'
import List from '../screen/explore/city/list'
import Detail from '../screen/explore/city/detail'
import PrivateNav from './private-nav'
import BookingPage from '../screen/account/booking/BookingPage'
import Ads from '../screen/explore/advertisement/Advertisement'

import PublicNav from './public-nav'

import { theme } from '../styles/styles'

const StackPublic = createStackNavigator({
    PublicNav: PublicNav,
    BookingPage: BookingPage,
    Explore: Explore,
    List: List,
    Detail: Detail,
    Ads: Ads,
    PrivateNav: PrivateNav
}, {
        initialRouteName: 'PrivateNav',
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