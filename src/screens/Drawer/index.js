// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';

import Constants   from '../../global/Constants';

@inject('App') @observer
export default class Drawer extends Component {
  render() {
    const { App } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Drawer
        </Text>
        <Button
          title={`GAS`}
          onPress={() => {
            App.rootNavigator.push({
              screen: Constants.Screens.FIRST_TAB.screen,
              title: 'Gas'
            });

          }}
        />

        <Button
          title={`ELEC`}
          onPress={() => {
            App.rootNavigator.push({
              screen: Constants.Screens.SECOND_TAB.screen,
              title: 'Elec'
            });
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
