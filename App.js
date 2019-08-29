import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'

import PublicStack from './src/navigation/public-stack'
import PrivateStack from './src/navigation/private-stack'
import CheckStack from './src/navigation/check-stack'



import store from './src/redux/store'



const AppNavigator = createSwitchNavigator({
  PrivateStack: PrivateStack,
  PublicStack: {
    screen: PublicStack,
    navigationOptions: {
      header: null,
    }
  },
  CheckStack: {
    screen: CheckStack,
    navigationOptions: {
      header: null,
    }
  }
}, {
    initialRouteName: 'CheckStack'
  })

const AppContainer = createAppContainer(AppNavigator)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
export default App;