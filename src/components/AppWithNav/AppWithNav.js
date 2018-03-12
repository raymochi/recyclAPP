import React from 'react';
import PropTypes from 'prop-types';
import { Text, NetInfo } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import Routes from '../../routes';
import getStore from '../../store';
import { Provider, connect } from 'react-redux';
import Config from 'react-native-config';

const AppNavigator = StackNavigator(Routes, {
  navigationOptions: {
    gesturesEnabled: false
  }
});

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

const store = getStore(navReducer);

export default class AppWithNavigationState extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav
      })} />
    );
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object
};
