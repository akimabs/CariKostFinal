import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Chat from '../Chat'

const AppNavigator = createStackNavigator({
    Chat: {
        screen: Chat,
        navigationOptions: {
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0
            }
        }
    }
}, {
        initialRouteName: 'Chat'
    })

export default createAppContainer(AppNavigator);