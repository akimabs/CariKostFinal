import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Profile from '../Profile'
import EditProfile from '../EditProfile/EditProfile'
import Login from '../Login'
import Register from '../Register'
import BookingList from '../Booking/BookingList'
import BookingPage from '../Booking/BookingPage'
// import Calendar from '../Booking/Calendar'

const AppNavigator = createStackNavigator({
    BookingPage: {
        screen: BookingPage,
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
                shadowOpacity: 0
            }
        }
    },
    BookingList: {
        screen: BookingList
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#00a663',
                elevation: 0,
                shadowOpacity: 0
            },
            headerTintColor: 'white'
        }
    },
    Login: {
        screen: Login
    }, Profile: {
        screen: Profile
    }, EditProfile: {
        screen: EditProfile,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#00a663',
                elevation: 0,
                shadowOpacity: 0
            },
            headerTintColor: 'white'
        }
    }
}, {
        initialRouteName: 'Login'
    })

export default createAppContainer(AppNavigator);