import React, { useMemo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
// import { useNavigationState } from "@react-navigation/native";
import { useColorScheme } from "@components/useColorScheme";
import SCREENS, { MODALS } from "@constants/screen.constant";
// screen
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import ResetPasswordScreen from "./ResetPasswordScreen";
import OnBoardingScreen from "./OnBoardingScreen";
import SearchScreen from "./SearchScreen";
import EventDetailScreen from "./EventDetailScreen";
import BlogScreen from "./BlogDetailScreen";
import BottomTabNavigation from "@components/navigation/BottomTabNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import LogOutModal from "@components/modal/LogOutModal";
import EditImageModal from "@components/modal/EditImage";
import EditProfile from "@components/modal/EditProfile";
import PricingScreen from "./PricingScreen";
import BookingScreen from "./BookingScreen";
import ProfileScreen from "./ProfileScreen";
import TestingScreen from "./TestingScreen";

const Stack = createNativeStackNavigator();
const RootStack = createStackNavigator();

export default function RootNavigation({
  initialRoute = SCREENS.booking,
}: any) {
  const colorScheme = useColorScheme();

  if (initialRoute === null) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName={initialRoute}>
        <RootStack.Group screenOptions={{ presentation: "modal" }}>
          <RootStack.Screen
            name={MODALS.logOut}
            component={LogOutModal}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name={MODALS.editImage}
            component={EditImageModal}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name={MODALS.editProfile}
            component={EditProfile}
            options={{ headerShown: false }}
          />
        </RootStack.Group>

        <Stack.Screen
          name={SCREENS.onBoarding}
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.pricing}
          component={PricingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.signUp}
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.signIn}
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.booking}
          component={BookingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.resetPassword}
          component={ResetPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.search}
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.profile}
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.eventDetail}
          component={TestingScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#ffffff" },
            headerTintColor: "#76468F",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        {/* <Stack.Screen
          name={SCREENS.profile}
          component={BlogScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name={SCREENS.main}
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
