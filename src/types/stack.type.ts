// stack.type.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  home: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  Dashboard: undefined;
  EventListing: undefined;
  EventDetail: { id: string };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
