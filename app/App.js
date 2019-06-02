import React from "react";
import { View, Text,Image } from "react-native";
import { createStackNavigator, createAppContainer, 
  createDrawerNavigator,createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import HomeScreen from './src/screens/Home';
import SettingScreen from './src/screens/Settings';
import FreindScreen from "./src/screens/Friends";
import ProfileScreen from "./src/screens/Profile";
import StoreScreen from "./src/screens/Store";
import WelcomeScreen from "./src/screens/Welcome";
import LoginScreen from "./src/screens/Login";
import RegisterScreen from "./src/screens/Register";
import Icon from "react-native-vector-icons/Ionicons";
import styles from './src/assets/css/style';


//
//TabNavigator
//
const AppTabNavigator = createBottomTabNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarOptions: { 
        activeTintColor: '#0BBAD2',
        inactiveTintColor: '#A4ABB0',
},
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./src/assets/icons/Home.png")}
          style={{ width: 26, height: 26, tintColor:'#A4ABB0' }}
        />
      )
    }
  },
  Store:{
    screen:StoreScreen,
    navigationOptions: {
      tabBarLabel: "Store",
      tabBarOptions: { 
        activeTintColor: '#0BBAD2',
        inactiveTintColor: '#A4ABB0',
},
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./src/assets/icons/store.png")}
          style={{ width: 26, height: 26, tintColor:'#A4ABB0' }}
        />
      )
    }
  },
  Friend:{
    screen:FreindScreen,
    navigationOptions: {
      tabBarLabel: "Friends",
      tabBarOptions: { 
        activeTintColor: '#0BBAD2',
        inactiveTintColor: '#A4ABB0',
},
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./src/assets/icons/friends.png")}
          style={{ width: 26, height: 26, tintColor:'#A4ABB0'}}
        />
      )
    }
  },
  Profile:{
    screen:ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarOptions: { 
        activeTintColor: '#0BBAD2',
        inactiveTintColor: '#A4ABB0',
},
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("./src/assets/icons/profile.png")}
          style={{ width: 26, height: 26, tintColor:'#A4ABB0'}}
        />
      )
    }
  }
},{
  initialRouteName: "Home",
  tabBarOptions: {
    style: {
     height: 55,
     backgroundColor: '#FFFFFF'
    }
  },

  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index];
    return{
      headerTitle:routeName
    };
  },
  
});

//
// stack Navigator
//

const MainStackNavigator = createStackNavigator({
  AppDrawerNavigator:AppTabNavigator,
  Setting:{
    screen:SettingScreen
  }
},
{
  defaultNavigationOptions:({navigation}) =>{
    return{
      headerLeft:<Icon name="md-menu" style={{paddingLeft:10 }}
      onPress={() => navigation.openDrawer()}
       size={30}/>
    };
  }
});

//
// DrawerNavigator
//
const AppDrawerNavigator = createDrawerNavigator({
  Home:{
    screen:MainStackNavigator
  },
  Setting:{
    screen:SettingScreen
  }
});


//
// SwitchNavigator
//
const AppswitchNavigator = createSwitchNavigator({
welcome:{screen:WelcomeScreen},
Login:{screen:LoginScreen},
Home:{screen:AppDrawerNavigator}
})




const App = createAppContainer(AppswitchNavigator);

export default App;