/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView,ListView ,Platform, StyleSheet, Text, View,Button, Image, ActivityIndicator} from 'react-native';
import styles from '../assets/css/style';
import {Card, CardItem, Thumbnail, Body, Left, Right,Icon} from 'native-base';


import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../assets/css/color';
import { MeetupApi } from '../constants/api';

const meetupApi = new MeetupApi();

 class HomeScreen extends Component{

  static defaultProps = {
    meetupApi
  }

  state = {
    loading:false,
    meetups: [],
  }

  async componentDidMount(){
    this.setState({ loading: true });
    const meetups = await this.props.meetupApi.fetchGroupMeetups();
    this.setState({ loading: false, meetups });
  }
  render() {
    const {navigate} = this.props.navigation;
  
    
    return (
      <ScrollView style={[colors.newsfeed_bg]} contentContainerStyle={styles.contentContainer}>
          
     <Card>
       <CardItem>
         <Left>
           <Thumbnail source={require('../assets/images/creative work.jpeg')}/>
           <Body>
             <Text>Bipul Prasai</Text>
             <Text note>text </Text>
           </Body>
         </Left>
       </CardItem>
       <CardItem>
    
           <Text>text</Text>
      
       </CardItem>
     </Card>
         

        </ScrollView>

    );
  }
}

export default HomeScreen;
