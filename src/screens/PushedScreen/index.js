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


export default class PushedScreen extends Component {
  render() {

    return (
    
      <View>

            <Text style={styles.text}> {`Logged in as ${Account.current.username}`}</Text>



              <Text style={styles.thank}>Thank you for your payment</Text>

          <TouchableHighlight onPress={() => navigate('Home')} style={styles.touch}>
                    <Text style={styles.buttonText}>Log out</Text>
                  </TouchableHighlight>

            <Button style={styles.topup2}
                    onPress={() => Account.logout().then(() => Constants.Global.openLoginModalIn(this.props.navigator)) }
                    title="Log Out"/>


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
