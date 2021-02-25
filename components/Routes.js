import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext} from "../navigation/AuthProvider"

import AppStack from "./AppStack"
import RootStackScreen from "../components/RootStackScreen"
import auth from '@react-native-firebase/auth';

// const Stack = createStackNavigator();

// const useContext = React.createContext()
const Routes = () => {
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);
  
    const onAuthStateChanged = (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    };

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
  
    return (
      <NavigationContainer>
        {user ? <AppStack /> : <RootStackScreen />}
      </NavigationContainer>
    );
  };
  
  export default Routes;
