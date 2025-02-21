import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "app/HomeScreen";
import ProfileScreen from "app/ProfileScreen";
import FeedScreen from "app/FeedScreen";
import EventListingScreen from "app/EventListingScreen";
import SettingScreen from "app/SettingScreen";
import SCREENS from "@constants/screen.constant";
import { theme } from "@components/theme";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({ route }: any) => {
  const initialScreen = route.params?.initialRoute || SCREENS.home;
  return (
    <Tab.Navigator
      initialRouteName={initialScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:
            | "football-outline"
            | "home-outline"
            | "person-outline"
            | "newspaper-outline"
            | "settings-outline" = "home-outline";

          if (route.name === SCREENS.home) {
            iconName = "home-outline";
          } else if (route.name === SCREENS.profile) {
            iconName = "person-outline";
          } else if (route.name === SCREENS.feed) {
            iconName = "newspaper-outline";
          } else if (route.name === SCREENS.eventListing) {
            iconName = "football-outline";
          } else if (route.name === SCREENS.setting) {
            iconName = "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "white",
          paddingTop: 5,
          fontSize: 16,
          fontWeight: 300,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name={SCREENS.home} component={HomeScreen} />
      <Tab.Screen name={SCREENS.profile} component={ProfileScreen} />
      <Tab.Screen name={SCREENS.eventListing} component={EventListingScreen} />
      <Tab.Screen name={SCREENS.feed} component={FeedScreen} />
      <Tab.Screen name={SCREENS.setting} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
