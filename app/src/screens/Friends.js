/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import styles from '../assets/css/style';
import { TouchableOpacity } from 'react-native-gesture-handler';


 class FreindScreen extends Component{
  static navigationOptions = {
    title: 'FriendList',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.Container}>
  
        <Text>Home</Text>
      




      </View>
    );
  }
}

export default FreindScreen;
