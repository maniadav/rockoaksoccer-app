import React, { useEffect, useMemo, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
  useNavigationState,
} from "@react-navigation/native";
// import { useNavigationState } from "@react-navigation/native";
import { useColorScheme } from "@components/useColorScheme";
import BottomTabNavigator from "@components/navigation/BottomTabNavigator";
import TopNavigation from "@components/navigation/TopNavigation";
import SCREENS from "@constants/screen.constant";
import { getAsyncStorageValue } from "@utils/localStorage";
import { LOCALSTORAGE } from "constants/storage.constant";
// screen
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import ResetPasswordScreen from "./ResetPasswordScreen";
import OnBoardingScreen from "./OnBoardingScreen";
import EventListingScreen from "./EventListingScreen";
import SearchScreen from "./SearchScreen";
import EventDetailScreen from "./EventDetailScreen";
import SettingScreen from "./SettingScreen";
import FeedScreen from "./FeedScreen";
import BlogScreen from "./BlogDetailScreen";
import BottomTabNavigation from "@components/navigation/BottomTabNavigation";

const Stack = createNativeStackNavigator();

export default function RootStack({ initialRoute = SCREENS.main }: any) {
  console.log({ initialRoute });
  const colorScheme = useColorScheme();
  // const [initialRoute, setInitialRoute] = useState<string | null>("Home");

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     const storedUser = await getAsyncStorageValue(
  //       LOCALSTORAGE.LOGGED_IN_USER,
  //       true
  //     );
  //     const { email } = storedUser || {};
  //     console.log({ storedUser }, storedUser.email);
  //     // setInitialRoute(email ? SCREENS.home : SCREENS.onBoarding);
  //   };

  //   checkLoginStatus();
  // }, []);

  const showBottomTabNav = useMemo(
    () => [
      SCREENS.home,
      SCREENS.eventListing,
      SCREENS.profile,
      SCREENS.setting,
      SCREENS.feed,
    ],
    []
  );

  // const currentRouteName = useNavigationState(
  //   (state) => state.routes[state.index]?.name
  // );

  if (initialRoute === null) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name={SCREENS.onBoarding}
          component={OnBoardingScreen}
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
          name={SCREENS.eventDetail}
          component={EventDetailScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#ffffff" },
            headerTintColor: "#76468F",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name={SCREENS.profile}
          component={BlogScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.main}
          component={BottomTabNavigation}
          options={{ headerShown: false }}
          // initialParams={{ initialRoute }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
