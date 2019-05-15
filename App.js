import React, {Component} from 'react';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ServiceCardScreen from './src/screens/ServiceCardScreen';

//const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen });

const AppStack = createStackNavigator(
  {
    Home: { 
        screen: createBottomTabNavigator(
             {
               HomeTab: {screen: HomeScreen},
               ServiceCardTab: {screen: ServiceCardScreen},
               ChatTab: {screen: ChatScreen},
               ProfileTab: {screen: ProfileScreen},
             },{
                tabBarPosition: "bottom"
             })
    },
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));


