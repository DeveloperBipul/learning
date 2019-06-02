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


 class StoreScreen extends Component{
  static navigationOptions = {
    title: 'Store',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.Container}>
      
        <Text>store</Text>
       

      </View>
    );
  }
}

export default StoreScreen;
