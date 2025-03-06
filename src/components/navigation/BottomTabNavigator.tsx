import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import SCREENS from "@constants/screen.constant";

const BottomTabNavigator = () => {
  const navigation = useNavigation<any>();
  const currentRoute =
    navigation.getState().routes[navigation.getState().index]?.name;

  const getTabColor = (screenName: string) =>
    currentRoute === screenName ? "rgb(230,62,85)" : "black";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate(SCREENS.home)}
      >
        <Ionicons
          name="home-outline"
          size={24}
          color={getTabColor(SCREENS.home)}
        />
        <Text style={{ color: getTabColor(SCREENS.home) }}>Home</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate(SCREENS.profile)}
      >
        <Ionicons
          name="person-outline"
          size={24}
          color={getTabColor(SCREENS.profile)}
        />
        <Text style={{ color: getTabColor(SCREENS.profile) }}>Profile</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate(SCREENS.feed)}
      >
        <Ionicons
          name="newspaper-outline"
          size={24}
          color={getTabColor(SCREENS.feed)}
        />
        <Text style={{ color: getTabColor(SCREENS.feed) }}>Feed</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate(SCREENS.eventListing)}
      >
        <FontAwesome6
          name="soccer-ball"
          size={24}
          color={getTabColor(SCREENS.eventListing)}
        />
        <Text style={{ color: getTabColor(SCREENS.eventListing) }}>Event</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate(SCREENS.setting)}
      >
        <Ionicons
          name="settings-outline"
          size={24}
          color={getTabColor(SCREENS.setting)}
        />
        <Text style={{ color: getTabColor(SCREENS.setting) }}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingBottom: 20,
    elevation: 5,
  },
  tab: {
    alignItems: "center",
  },
});

export default BottomTabNavigator;
