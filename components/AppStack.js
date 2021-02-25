import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack"
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from "./MainTabScreen"
import { DrawerContent } from "./DrawerContent";
import SettingsScreen from '../screens/SettingsScreen';
import CartScreen from "../screens/CartScreen"

// import RootStackScreen from "./components/RootStackScreen"
// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export default function AppStack() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}initialRouteName="Home">
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="CartScreen" component={CartScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen}/>
      </Drawer.Navigator>
    // {/* </NavigationContainer> */}
  );
}

const styles = StyleSheet.create({
  
});
