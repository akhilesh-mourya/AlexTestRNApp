/***
LOOTSWAP - HELPER CLASS FOR NAVIGATION
***/

import * as React from 'react';
import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from './types';

export let isReadyRef = React.createRef();

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

interface CustomerRouteProp {
  name: string;
  params?: any;
}

export const resetRoute = (routes: Array<CustomerRouteProp>, index = 0) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  );
};
