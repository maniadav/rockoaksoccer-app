import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

  if (initialRoute === null) {
    return null; // Show nothing until the initial route is determined
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Sign In', headerShown: false }}
        />
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{ title: 'On Boarding', headerShown: false }}
        />

        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: 'Sign Up', headerShown: false }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ title: 'Sign In', headerShown: false }}
        />
        <Stack.Screen
          name="EventListingScreen"
          component={EventListingScreen}
          options={{ title: 'Sign In', headerShown: false }}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ title: 'Search' }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
