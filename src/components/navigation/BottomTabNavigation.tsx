// import SCREENS from "@constants/screen.constant";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "app/HomeScreen";
// import ProfileScreen from "app/ProfileScreen";
// import { Text } from "react-native";

// const Tab = createBottomTabNavigator();

// export function BottomTabNavigation() {
//   return (
//     <Tab.Navigator
//       initialRouteName={SCREENS.home}
//       screenOptions={({ route }: any) => ({
//         tabBarIcon: ({ focused }: any) => {
//           let label = route.name === SCREENS.home ? "🏠 Home" : "👤 Profile";

//           return (
//             <Text
//               style={{
//                 fontSize: 14,
//                 fontWeight: focused ? "bold" : "normal",
//                 color: focused ? "#007AFF" : "gray",
//               }}
//             >
//               {label}
//             </Text>
//           );
//         },
//         tabBarActiveTintColor: "#007AFF",
//         tabBarInactiveTintColor: "gray",
//         tabBarStyle: { backgroundColor: "white", height: 60 },
//       })}
//     >
//       <Tab.Screen
//         name={SCREENS.home}
//         component={HomeScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import HomeScreen from "app/HomeScreen";
import ProfileScreen from "app/ProfileScreen";
import FeedScreen from "app/FeedScreen";
import EventListingScreen from "app/EventListingScreen";
import SettingScreen from "app/SettingScreen";
import SCREENS from "@constants/screen.constant";

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
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
        tabBarActiveTintColor: "rgb(230,62,85)", // Active color
        tabBarInactiveTintColor: "black", // Inactive color
        tabBarStyle: {
          backgroundColor: "white",
          paddingVertical: 10,
          height: 70,
          fontSize: 16,
          fontFamily: "Georgia",
          fontWeight: 300,
        },
        headerShown: false, // ✅ Show header
      })}
    >
      <Tab.Screen name={SCREENS.home} component={HomeScreen} />
      <Tab.Screen name={SCREENS.profile} component={ProfileScreen} />
      <Tab.Screen name={SCREENS.eventListing} component={EventListingScreen} />
      <Tab.Screen name={SCREENS.feed} component={FeedScreen} />
      <Tab.Screen name={SCREENS.setting} component={SettingScreen} />
    </Tab.Navigator>
  );
}
