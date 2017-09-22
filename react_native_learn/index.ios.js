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
  View
} from 'react-native';
import MainView from './View/MainView.js';

export default class react_native_learn extends Component {

  constructor(props) {
    super(props)

    this.state = {
      boxs: []
    }
  }

  componentDidMount() {
    this.setState({
      boxs: this.getBoxs()
    });
  }

  getBoxs() {
    const boxs = [
      {
          key: 1,
          icon: 'ios-chatbubbles',
          text: 'test', size: 50, 
          color:'#FF9A05'
      },
      {
        key: 2,
        icon: 'ios-chatbubbles',
        text: 'test', size: 50, 
        color:'#FF9A05'
    }
    ];
    return boxs
  }

  render() {
    return (
      <MainView boxs={this.state.boxs}/>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('react_native_learn', () => react_native_learn);
