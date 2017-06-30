// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';

import NavButtons  from '../../global/NavButtons';
import NavBar      from '../../global/NavBar';
import Constants   from '../../global/Constants';
@inject('App', 'Account') @observer
export default class SecondTab extends Component {
  static navigatorButtons = NavButtons.WithSideMenu;
  static navigatorStyle   = NavBar.Default;

  constructor(props: {}) {
    super(props);

    const { App, navigator } = this.props;
    App.rootNavigator = navigator;

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event: {}) => {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
  }

  render() {
    const { Account, Counter } = this.props;

    return (
      <View style={styles.container}>

            <TouchableHighlight style={styles.grey2}>
              <Text>{`Logged in as ${Account.current.username}`}</Text>
          </TouchableHighlight>

            <View style={styles.balance}>
            <Text style={styles.bold}>Balance</Text>
            <Text style={styles.cost}>£55.00</Text>
          </View>

          <Text style={styles.indent}>On 14 Jul 2017 at 19:30 </Text>
          <TouchableHighlight onPress={() => navigate('Topup')} style={styles.touch2}>
              <Text style={styles.buttonText2}>Top up History</Text>
            </TouchableHighlight>

          <Text style={styles.bold}>Choose amount</Text>
          <Text style={styles.indent}>Top up at least £5- no more than£99</Text>

          <View style={styles.balance}>
            <TouchableHighlight style={styles.grey}>
            <Text style={styles.pound}>£</Text>
          </TouchableHighlight>
          <Text style={styles.amount}>05.00</Text>

        </View>

        <View style={styles.balance}>
        <Text style={styles.indent}> You last topped up: </Text>
        <Text style={styles.price}> £54 </Text>
        </View>
        <Text style={styles.indent}> On 05 April 2017 at 14:11pm </Text>

        <TouchableHighlight   onPress={() => navigate('Thank')} style={styles.touch}>
                <Text style={styles.buttonText}>Top up</Text>
              </TouchableHighlight>

          <Button style={styles.topup2}
            onPress={() => Account.logout().then(() => Constants.Global.openLoginModalIn(this.props.navigator)) }
            title="Log Out"/>

          </View>
        );
        }
        }

        const styles = StyleSheet.create({

            text: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5
          },
        container:{
          alignItems:'center',
          justifyContent:'center',
          marginTop:100,
        },

        balance:{
        //flex:1,
        flexDirection:'row',


        },

        cost:{
        marginLeft:50,
        marginTop:20,
        fontSize:25,
        color:'navy'

        },

        bold:{
        marginTop:30,
        marginRight:100,
        marginLeft:20,
        fontSize:20,
        color:'black',
        },

        topup:{
          flex:1,
          alignSelf:'flex-start',
          alignItems:'flex-start',

        },

        indent:{
        marginLeft:20,

        },

        pound:{
          fontSize:70,
          color:'#40A8F5',
          marginLeft:20,
          flexBasis:100,

        },

        amount:{
          fontSize:70,
          color:'black',
          marginLeft:58,
        },

        poundPicker:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'flex-start',
        },

        price:{
          color:'navy',
          fontSize:25,
          marginLeft:80,
        },
        topup2:{
          color:'lime',
          fontSize:40,
        },


        touch:{
          height:50,
          width:350,
          marginLeft:10,
          backgroundColor:'#7CE157',
          justifyContent:'center',
          marginTop:20,
        },
        buttonText:{
          flex:1,
          color:'white',
          fontSize:30,
          fontWeight:"400",
          alignSelf:'center',
        },
        touch2:{
          height:30,
          width:200,
          backgroundColor:'#E0E2DF',
          justifyContent:'center',
          alignSelf:'flex-start',
          marginTop:20,
        },
        buttonText2:{
          flex:1,
          color:'#40A8F5',
          fontSize:18,
          fontWeight:"600",
          alignSelf:'center',
        },

        grey:{
          height:60 ,
          width:70 ,
          backgroundColor:'#E0E2DF',

        },

        grey2:{
          height:30,
          width:370,
          backgroundColor:'#E0E2DF',

        },

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
})
