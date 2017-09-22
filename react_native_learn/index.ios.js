/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';
import MainView from './View/MainView.js';
export default class react_native_learn extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <NavigatorIOS 
        initialRoute={{
          index: 0,
          title: 'Learn',
          component: MainView,
        }}
        style={{flex: 1}}
      >
      </NavigatorIOS>
    );
  }
}

AppRegistry.registerComponent('react_native_learn', () => react_native_learn)
