import React, { Component } from "react"; 
import {Platform, StyleSheet, Text, View,Button, Image} from 'react-native';
import styles from '../assets/css/style';
import { TouchableOpacity } from "react-native-gesture-handler";

class WelcomeScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.Container}>
      {/* <Text>Welcome to React Native!</Text> */}
   
      <TouchableOpacity style={styles.button} 
        onPress={() => navigate('Login')}>
       <Text style={styles.iconbar_text}>
         Login
       </Text>
      </TouchableOpacity>
   
      <TouchableOpacity style={styles.button}>
      <Text style={styles.iconbar_text}>
       Signup
       </Text>
        </TouchableOpacity>



    </View>
    );
  }
}

export default WelcomeScreen;