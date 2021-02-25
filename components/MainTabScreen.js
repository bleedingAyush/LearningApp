import React from 'react'

import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import DetailsScreen from "../screens/DetailsScreen"
import * as Icon from "@expo/vector-icons"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ExploreScreen from "../screens/ExploreScreen"
import ProfileScreen from "../screens/ProfileScreen"

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:"#009387" ,
          tabBarIcon: ({ color }) => (
            <Icon.FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: "#1f65ff",
          tabBarIcon: ({ color }) => (
            <Icon.FontAwesome name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: "#694fad",
          tabBarIcon: ({ color }) => (
            <Icon.MaterialCommunityIcons name="face-profile" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarColor: "#d02860",
          tabBarIcon: ({ color }) => (
            <Icon.MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>   
)

export default MainTabScreen;
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();


const HomeStackScreen = ({navigation}) => {
    return (
    <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={HomeScreen} options={{
            headerLeft: () => (
              <Icon.Entypo.Button name="menu" size={24} color="black" onPress={() => navigation.openDrawer()}></Icon.Entypo.Button>
            ) 
          }}/>
    </HomeStack.Navigator> 
    )
  }
const DetailsStackScreen = ({navigation}) => {
    return (
    <DetailsStack.Navigator>
          <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
            headerLeft: () => (
              <Icon.Entypo.Button name="menu" size={24} color="black" onPress={() => navigation.openDrawer()}></Icon.Entypo.Button>
            )
          }} />
    </DetailsStack.Navigator> 
    )
  }
  