import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
import RepairAddingScreen from './src/screens/RepairAddingScreen';

//const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen });

const HomeTabStack = createStackNavigator({
  HomeTab: HomeScreen,
  Details: DetailsScreen,
  FrontSideServices: FrontSideServices,
  BackSideServices: BackSideServices,
  MotorServices: MotorServices
})

const ServiceCardTabStack = createStackNavigator({
  ServiceCardTab: ServiceCardScreen,
  RepairAdding: RepairAddingScreen
})

const AppStack = createStackNavigator(
  {
    Home: {
      screen: createBottomTabNavigator(
        {
          //HomeTab: {screen: HomeScreen},
          HomeTab: { screen: HomeTabStack },
          //ServiceCardTab: { screen: ServiceCardScreen },
          ServiceCardTab: {screen: ServiceCardTabStack},
          ChatTab: { screen: ChatScreen },
          ProfileTab: { screen: ProfileScreen },
          PriceHelperTab: { screen: PriceHelperScreen }
        },
        {
          defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const { routeName } = navigation.state;
              let IconComponent = Ionicons;
              let iconName;
              if (routeName === 'HomeTab') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                // Sometimes we want to add badges to some icons. 
                // You can check the implementation below.
                //IconComponent = HomeIconWithBadge; 
              } else if (routeName === 'Settings') {
                iconName = `ios-options`;
              }
      
              // You can return any component that you like here!
              return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
          }),
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          },
        }, 
        {
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


