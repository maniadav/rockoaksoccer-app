import * as React from 'react';
import {
  StackActions,
  NavigationContainerRef,
  NavigationAction,
} from '@react-navigation/native';

// Typing navigationRef with NavigationContainerRef
export const navigationRef = React.createRef<NavigationContainerRef<any>>();

// Updated navigate method to accept correct params type
export function navigate(name: string, params?: object): void {
  navigationRef.current?.navigate(name, params);
}

// Dispatch action directly
export function dispatch(action: NavigationAction): void {
  navigationRef.current?.dispatch(action);
}

// Replace method using StackActions
export function replace(name: string, params?: object): void {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

// Push method using StackActions
export function push(name: string, params?: object): void {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

// Go back to previous screen
export function goBack(): void {
  navigationRef.current?.goBack();
}

// Consolidating navigation functions into an object
export const navigation = {
  navigate,
  dispatch,
  replace,
  push,
  goBack,
};
