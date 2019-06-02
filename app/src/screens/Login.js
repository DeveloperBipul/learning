import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import Loginstyles from '../assets/css/Loginstyle';
import * as images from '../assets/images/user.png';

export default class Login extends Component {
  state = {
    logging: false
  };
  // This is for demo only, normally you want to create an api wrapper
  async callLoginAPI() {
   
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={Loginstyles.container}>
        <View
          style={{
            flex: 1
          }}
        >
          <Image
            resizeMode="cover"
            style={[
              {
                width: '100%',
                height: '100%',
                overflow: 'visible'
              }
            ]}
            source={require("../assets/images/user.png")}
          />
        </View>
        <TextInput
          email
          required
          placeholder="Username"
          style={[Loginstyles.textInput, { marginTop: 40 }]}
        />
        <TextInput
        secureTextEntry
        required
          placeholder="Password"
          style={[Loginstyles.textInput, { marginVertical: 20 }]}
        />

        <TouchableOpacity
          onPress={() => navigate('Home')}
          style={[Loginstyles.button]}
        >
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
            SIGN IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            height: 40,
            justifyContent: 'center',
            marginBottom: 20
          }}
        >
          <Text style={{ color: '#BDC3C6', fontSize: 15 }}>
            Need Help?
          </Text>
        </TouchableOpacity>
        <Text style={{ alignSelf: 'center', color: '#A6A8A9', fontSize: 15 }}>
          Don’t have an account yet ?
        </Text>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            height: 34,
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: '#0D92CA', fontSize: 15 }}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

