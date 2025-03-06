// stack.type.ts
import SCREENS from "@constants/screen.constant";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  logOut: { screen: "Log Out" };
  main: { screen: "MainScreen" };
  home: { screen: "Home" };
  onBoarding: { screen: "OnBoarding" };
  signIn: { screen: "SignIn" };
  signOut: { screen: "SignOut" };
  signUp: { screen: "SignUp" };
  resetPassword: { screen: "ResetPassword" };
  eventListing: { screen: "Event" };
  eventDetail: { screen: "EventDetail" };
  profile: { screen: "Profile" };
  setting: { screen: "Setting" };
  search: { screen: "Search" };
  feed: { screen: "Feed" };
  blog: { screen: "Blog" };
  pricing: { screen: "Pricing" };
};

// export type RootStackNavigationProp = NativeStackNavigationProp<
//   RootStackParamList | any
// >;

export type RootStackNavigationProp = {
  navigation: StackNavigationProp<any>;
  route: RouteProp<any>;
};
