import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import getStore from './src/store';
import { StackNavigator } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import AppWithNav from './src/components/AppWithNav';
import Routes from './src/routes';

const AppNavigator = StackNavigator(Routes);

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

const store = getStore(navReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNav />
      </Provider>
    );
  }
}
