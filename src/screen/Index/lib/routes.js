import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'

import Explore from '../Explore'
import Search from '../Search'
import WishList from '../../WishList/WishList'
import Detail from '../City/Detail'
import List from '../City/List'
import Map from '../City/Map'
import Advertisement from '../../Account/Advertisement/Advertisement'
import BookingPage from '../../Account/Booking/BookingPage'
// import Calendar from '../../Account/Booking/Calendar'
import Filter from '../City/filter/Filter'

const AppTabNav = createMaterialTopTabNavigator(
    {
        Map: Map,
        List: List,
    },
    {
        tabBarOptions: {
            activeTintColor: '#00a663',
            inactiveTintColor: 'silver',
            labelStyle: {
                fontWeight: 'bold',
                fontSize: 13
            },
            showLabel: true,
            style: {
                backgroundColor: 'white'
            }, indicatorStyle: {
                backgroundColor: '#00a663'
            }
        },
    }
)

const AppNavigator = createStackNavigator({
    Filter: {
        screen: Filter,
        navigationOptions: {
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0
            }
        }
    }
    , BookingPage: {
        screen: BookingPage
    },
    Advertisement: {
        screen: Advertisement,
        navigationOptions: {
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0
            }
        }
    },
    Explore: {
        screen: Explore
    }, Search: {
        screen: Search
    },
    WishList: {
        screen: WishList
    },
    City: {
        screen: AppTabNav,
        navigationOptions: {
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0
            }
        }
    }, Detail: {
        screen: Detail,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#00a663'
            },
            headerTintColor: 'white'
        }
    }
}, {
        initialRouteName: 'Explore',

    });

const AppNavigatorr = createAppContainer(AppNavigator);

class Index extends Component {
    render() {
        return (
            <AppNavigatorr />
        );
    }
}

export default Index

