import * as React from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

export function push(name: string, params?: object) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function goBack() {
  navigationRef.current?.goBack();
}

export const navigation = {
  navigate,
  push,
  goBack,
};
