/***
LOOTSWAP - HELPER CLASS FOR NAVIGATION
***/

import * as React from 'react';
import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from './types';
import {ScreenNamesAndTitle} from '../constants/stringConstants';

export let isReadyRef = React.createRef();

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();
/*
Reset - A method to reset the current stack with the given screen
*/
export const resetRoute = (
  screenName = ScreenNamesAndTitle.APP_SCREENS,
  data = {},
  screenIndex = 0,
) => {
  let routes = [];
  let index = 0;
  switch (screenIndex) {
    case 1:
      index = 1;
      routes = [
        // {name: BottomTabScreenKey.MainMenuScreen},
        {name: screenName, params: data},
      ];
      break;
    case 2:
      index = 1;
      routes = [
        // {name: ChatScreenKey.ChatListScreen},
        {name: screenName, params: data},
      ];
      break;

    default:
      routes = [{name: screenName, params: data}];
      break;
  }

  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  );
};

interface CustomerRouteProp {
  name: string;
  params?: any;
}

export const resetCustomerRoute = (
  routes: Array<CustomerRouteProp>,
  index = 0,
) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  );
};
