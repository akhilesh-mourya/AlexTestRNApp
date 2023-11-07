/***
NattyHatty - NAVIGATION STACK CLASS
***/

import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './navigationHelper';
import {SCREEN_NAME} from '../enums';
import Chat from '../screens/chat';

const Stack = createStackNavigator();

const StackNavigator: FC<{}> = () => {
  const onNavigationReady = () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={onNavigationReady}>
      <Stack.Navigator
        initialRouteName={SCREEN_NAME.Chat}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={SCREEN_NAME.Chat} component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
