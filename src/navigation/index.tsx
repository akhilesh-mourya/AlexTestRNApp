/***
NattyHatty - NAVIGATION STACK CLASS
***/

import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';
import {LoadingProps} from '../redux/loading/type';
import {useAppSelector} from '../redux/store';

import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './navigationHelper';

const Stack = createStackNavigator();

const StackNavigator: FC<{}> = () => {
  const loading: LoadingProps = useAppSelector(state => state.loading);

  const onNavigationReady = () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={onNavigationReady}>
      <Stack.Navigator
        initialRouteName={WelcomeScreen}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={We} component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
