import React, { useEffect, useMemo, useState } from 'react';
import { useNavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/components/useColorScheme';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ResetPasswordScreen from './ResetPasswordScreen';
import OnBoardingScreen from './OnBoardingScreen';
import { getAsyncStorageValue } from '@/utils/localStorage';
import { LOCALSTORAGE } from '@/constants/sotrage.constant';
import EventListingScreen from './EventListingScreen';
import SearchScreen from './SearchScreen';
import EventDetailScreen from './EventDetailScreen';
import SCREENS from '@/constants/screen.constant';
import BottomTabNavigator from '@/components/navigation/BottomTabNavigator';
import SettingScreen from './SettingScreen';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Show nothing while fonts are loading
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const storedUser = await getAsyncStorageValue(
        LOCALSTORAGE.LOGGED_IN_USER,
        true
      );

      const { email: userEmail } = storedUser || {};

      setInitialRoute(userEmail ? 'EventListingScreen' : 'OnBoardingScreen');
    };
    checkLoginStatus();
  }, []);

  const showBottomTabNav = useMemo(
    () => [
      SCREENS.home,
      SCREENS.eventListing,
      SCREENS.profile,
      SCREENS.setting,
    ],
    []
  );

  const currentRouteName = useNavigationState(
    (state) => state.routes[state.index]?.name
  );

  if (initialRoute === null) {
    return null; // Show nothing until the initial route is determined
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name={SCREENS.home}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.onBoarding}
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.setting}
          component={SettingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.profile}
          component={ProfileScreen}
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
          name={SCREENS.eventListing}
          component={EventListingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.eventDetail}
          component={EventDetailScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: '#ffffff' },
            headerTintColor: '#76468F',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Stack.Navigator>
      {showBottomTabNav.includes(currentRouteName) && <BottomTabNavigator />}
    </ThemeProvider>
  );
}
