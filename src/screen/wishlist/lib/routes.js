import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import Recent from '../Recent';
import Favorite from '../Favorite';

const AppNavigator = createMaterialTopTabNavigator(
    {
        Favorite: Favorite,
        Recent: Recent,
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
export default createAppContainer(AppNavigator);