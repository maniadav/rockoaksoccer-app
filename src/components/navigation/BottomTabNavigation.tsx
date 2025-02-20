import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "app/HomeScreen";
import ProfileScreen from "app/ProfileScreen";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused }: any) => {
          let label = route.name === "HomeScreen" ? "🏠 Home" : "👤 Profile";

          return (
            <Text
              style={{
                fontSize: 14,
                fontWeight: focused ? "bold" : "normal",
                color: focused ? "#007AFF" : "gray",
              }}
            >
              {label}
            </Text>
          );
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "white", height: 60 },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
