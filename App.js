import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackScreen from "./components/RootStackScreen"
import AppStack from "./components/AppStack"
import Providers from "./components"

export default function App() {
  return (
    <Providers/>
    // <NavigationContainer>
    //   <RootStackScreen/>
    // </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});