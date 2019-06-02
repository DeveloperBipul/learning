/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image} from 'react-native';
import styles from '../assets/css/style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";


 class SettingScreen extends Component{
  static navigationOptions = ({navigation}) => ({
    title: 'Settings',
    headerLeft:  <Icon
    name="md-close"
    style={{fontSize: 20, paddingLeft:10 }}
       onPress={() => navigation.goBack()}
     />,
  })
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.Container}>
   
        <Text>Home</Text>
        </View>

    );
  }
}

export default SettingScreen;
