/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {fetchMeetups} from './src/constants/api';




export default class App extends Component{
  static defaultProps = {
    fetchMeetups
  }
  state = {
    loading:false,
    meetups:[]
  }

  async componentDidMount(){
    this.setState({ loading: true});
    const data = await this.props.fetchMeetups();
    setTimeout(() => this.setState({ loading: false, meetups: data.meetups }), 2000);
  }
  render() {
    if(this.state.loading){
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Native!</Text>
        {this.state.meetups.map((meetup, i) =>(
          <Text  key={i}>{meetup.title}</Text>
        ))}
      
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
