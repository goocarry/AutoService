import React, {Component} from 'react';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ServiceCardScreen from './src/screens/ServiceCardScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import PriceHelperScreen from './src/screens/PriceHelper';
import FrontSideServices from './src/screens/FrontSideServices';
import BackSideServices from './src/screens/BackSideServices';
import MotorServices from './src/screens/MotorServices';

import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDTxoC3DFCvuWwWRt8ePJDT_BK_pSKccCA",
  authDomain: "autoservice-661ed.firebaseapp.com",
  databaseURL: "https://autoservice-661ed.firebaseio.com",
  projectId: "autoservice-661ed",
  storageBucket: "autoservice-661ed.appspot.com",
  messagingSenderId: "154272590476",
  appId: "1:154272590476:web:51a6dbc650773100"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

//const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen });

const HomeTabStack = createStackNavigator({ 
  HomeTab: HomeScreen,
  Details: DetailsScreen,
  FrontSideServices: FrontSideServices,
  BackSideServices: BackSideServices,
  MotorServices: MotorServices
})

const AppStack = createStackNavigator(
  {
    Home: { 
        screen: createBottomTabNavigator(
             {
               //HomeTab: {screen: HomeScreen},
               HomeTab: {screen: HomeTabStack},
               ServiceCardTab: {screen: ServiceCardScreen},
               ChatTab: {screen: ChatScreen},
               ProfileTab: {screen: ProfileScreen},
               PriceHelperTab: {screen: PriceHelperScreen}
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


